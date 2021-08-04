import * as React from 'react';
import styles from '../styles/HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DatePicker, Dropdown, getTheme, GlobalSettings, IDropdownOption, TextField } from 'office-ui-fabric-react';

const customizations = GlobalSettings.getValue('customizations');
const theme = getTheme();
(customizations as any).settings.theme.effects = { ...theme.effects };
(customizations as any).settings.theme.spacing = { ...theme.spacing };
(customizations as any).settings.theme.fonts = { ...theme.fonts };

export const HelloWorld = (props: IHelloWorldProps) => {
  
  const [name, setName] = React.useState<string>('');
  const [datum, setDatum] = React.useState<Date>(new Date());
  const [moznost, setMoznost] = React.useState<IDropdownOption>({key: '', text: ''});
  const [showData, setShowData] = React.useState<boolean>(false);

  const onTextChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
    console.log('NewValue', newValue);
    setName(newValue as string);
  }

  const onDateChange = (date: Date | null | undefined) => {
    setDatum(date as Date);
  }

  const onDropdownChange = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption, index?: number) => {
   console.log('newOptions', option);
    setMoznost(option as IDropdownOption);
  }

  React.useEffect(() => {
    console.log("moz", moznost);
  }, [moznost])

  const dropdownOptions : IDropdownOption[] = [
    {key: '1', text: 'Moznost1'},
    {key: '2', text: 'Moznost2'},
  ]

  const onButtonClick = () => {
    setShowData(!showData);
  }
  return (
    <div className={styles.helloWorld} >
      <div className={styles.container}>
        <div className={styles.row}>
          <TextField label="Standard" required={false} onChange={(e, nv) => onTextChange(e, nv)}  />
          <DatePicker label="Date Picker" onSelectDate={(date) => onDateChange(date)}/>
          <Dropdown
            style={{color: 'black'}}
            label="Basic uncontrolled example"
            options={dropdownOptions}
            onChange={(e, o, i) => onDropdownChange(e, o, i)}
            selectedKey={moznost.key as string}
            // selectedKeys={[moznost.key as string]}
          />
          <button onClick={() => onButtonClick()}>Click me</button>
          {showData && 
            <div>
              <span>{name}</span>
              <span>{datum.toDateString()}</span>
              <span>{moznost.text}</span>
            </div>
          }
        </div>
      </div>
    </div >
  );
}
