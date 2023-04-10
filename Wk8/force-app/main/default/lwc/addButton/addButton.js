import { LightningElement } from 'lwc';

export default class ButtonBasic extends LightningElement {
    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
        this.myValue = this.myValue;
    }

  //  myValue="SalesForce Bolt";
    handleChange(event) {
        myValue = event.target.value;
    }

}
