mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
import {MDCRipple} from '@material/ripple';

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});
import {MDCTextField} from '@material/textfield';

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
formField.input = checkbox;
import {MDCTextFieldHelperText} from '@material/textfield/helper-text';

const helperText = new MDCTextFieldHelperText(document.querySelector('.mdc-text-field-helper-text'));
import {MDCMenu} from '@material/menu';

const menu = new MDCMenu(document.querySelector('.mdc-menu'));
menu.open = true;
$(document).ready(function(){
  /*$("input[type='checkbox']").click(function(){
    $(".mech").css("color","green");
  });
  /*
  $("checkbox").dblclick(function(){
    $(".mech").css("background-color","white");
  });
  */
  $("input[type='checkbox']").click("click", function(){
    $(".mech").css("color","green");
  });
  
});
var firstname = document.getElementById('#exampleInputEmail1').value;
var countryCodes={

}
$(function () {
  $('[data-toggle="popover"]').popover()
})
$('.carousel').carousel();