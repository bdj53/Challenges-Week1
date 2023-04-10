import { LightningElement,track} from 'lwc';


export default class BindHtmlDynamic extends LightningElement {
    @track
    myValue="SalesForce Bolt";
    newValue="Hold";
    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
        this.newValue = this.newValue + this.myValue;
    }

    handleChange(event) {
    
        this.myValue = event.target.value;
    }
}