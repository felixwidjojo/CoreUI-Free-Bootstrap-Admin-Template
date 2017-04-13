import React, { Component } from 'react';

class SidebeepInput extends Component {

    renderInput(){
        const
        {
            InputType,
            InputID,
            InputName,
            InputPlaceholder,
        }
        = this.props

        let inputClass='form-control';

        return(
            (this.props.InputType === 'text' || this.props.InputType === 'password') && this.props.InputID != null ?
            <div>
                <input className={inputClass} type={InputType} id={InputID} name={InputName} placeholder={InputPlaceholder} />
            </div>
            :
            ''
        );
    }

    renderRadio(){
        const
        {
            RadioType,
            RadioID,
            RadioName,
            RadioPlaceholder,
            RadioHtmlFor,
            RadioValue,
            RadioTitle,
        }
        = this.props

        let radioClass = 'radio';

        return(
            this.props.RadioType === 'radio' && this.props.RadioID != null ?
            <div className={radioClass}>
                <label htmlFor={RadioHtmlFor}>
                    <input type={RadioType} id={RadioID} name={RadioName} value={RadioValue}/> {RadioTitle}
                </label>
            </div>
            :
            ''
        );
    }

    renderCheckbox(){
        const
        {
            CheckType,
            CheckID,
            CheckName,
            CheckPlaceholder,
            CheckHtmlFor,
            CheckValue,
            CheckTitle,
        }
        = this.props

        let checkboxClass = 'radio';

        return(
            this.props.CheckType === 'checkbox' && this.props.CheckID != null ?
            <div className={checkboxClass}>
                <label htmlFor={CheckHtmlFor}>
                    <input type={CheckType} id={CheckID} name={CheckName} value={CheckValue}/> {CheckTitle}
                </label>
            </div>
            :
            ''
        );
    }

    renderComboBox(){

        const
        {
            ComboType,
            ComboID,
            ComboName,
            ComboSize,
        }
        = this.props

        let inputCombo=`form-control`;

        return(
            this.props.ComboID === 'checkbox' && this.props.ComboID != null ?
            <select className={inputCombo} id={ComboID} name={ComboName} size={ComboSize}>
                {this.props.children}
            </select>
            :
            ''
        );
    }

    renderRadioInline(){

        const
        {
            RadioType,
            RadioID,
            RadioName,
            RadioPlaceholder,
            RadioHtmlFor,
            RadioValue,
            RadioTitle,
            RadioRow,
            RadioInline,
        }
        = this.props

        return(
            this.props.RadioType === 'radio' && this.props.RadioID != null && this.props.InlineType == 'radio' ?
            <div>
                <input className type={RadioType} id={RadioID} name={RadioName} value={RadioValue}/> {RadioTitle}
            </div>
            :
            ''
        );
    }

    renderCheckboxInline(){

        const
        {
            CheckType,
            CheckID,
            CheckName,
            CheckPlaceholder,
            CheckHtmlFor,
            CheckValue,
            CheckTitle
        }
        = this.props

        return(
            this.props.CheckType === 'checkbox' && this.props.CheckID != null && this.props.InlineType == 'checkbox' ?
            <div>
                <input type={CheckType} id={CheckID} name={CheckName} value={CheckValue}/> {CheckTitle}
            </div>
            :
            ''
        );
    }

    renderImage(){
        const
        {
            ImageType,
            ImageID,
            ImageName,
        }
        = this.props

        if(this.props.ImageType == 'image'){
            this.props.ImageType === 'file'
        }

        return(
            this.props.ImageType === 'file' || this.props.ImageType === 'image' && this.props.ImageID != null ?
            <input type={ImageType} id={ImageID} name={ImageName}/>
            :
            ''
        );
    }

    render(){
        
        const
        {
            InlineType,
            HtmlFor,
        }
        = this.props

        if(this.props.InlineType == 'radio'){
            this.props.InlineType === 'radio-inline'
        }
        if(this.props.InlineType == 'checkbox'){
            this.props.InlineType === 'checkbox-inline'
        }

        return(
                this.props.InlineType === 'radio' || this.props.InlineType === 'checkbox' ?
                <label className={InlineType} htmlFor={HtmlFor}>
                    {this.renderRadioInline()}
                    {this.renderCheckboxInline()}
                </label>
                :
                <div>
                    {this.renderInput()}
                    {this.renderRadio()}
                    {this.renderCheckbox()}
                    {this.renderImage()}
                    {this.renderComboBox()}
                </div>
        );
    }

}

export default SidebeepInput; 