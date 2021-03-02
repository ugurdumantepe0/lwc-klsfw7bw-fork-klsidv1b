import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {


  @track year = '';
  @track month = '';

  get months() {

  return  [ { label : "Ocak", value: '1'},
          { label : "Şubat", value: '2'},
          { label : "Mart", value: '3'},
          { label : "Nisan", value: '4'},
          { label : "Mayıs", value: '5'},
          { label : "Haziran", value: '6'},
          { label : "Temmuz", value: '7'},
          { label : "Ağustos", value: '8'},
          { label : "Eylül", value: '9'},
          { label : "Ekim", value: '10'},
          { label : "Kasım", value: '11'},
          { label : "Aaralık", value: '12'}
        ];
          
  } 

  get years() {

  return  [ { label : "2021", value: '2021'},
          { label : "2020", value: '2020'},
          { label : "2019", value: '2019'},
          { label : "2018", value: '2018'},
          { label : "2017", value: '2017'},
          { label : "2016", value: '2016'},
          { label : "2015", value: '2015'},
          { label : "2014", value: '2014'},
          { label : "2013", value: '2013'},
          { label : "2012", value: '2012'},
          { label : "2011", value: '2011'}
        ];
          
  }   

}
