# Nativescript-autocomplete(Angular)
This repo is clone of [nativescript-ui-samples-angular](https://github.com/NativeScript/nativescript-ui-samples-angular/tree/master/autocomplete )
 This was created to reproduce the issue of nested scroll in RadAutoCompleteTextView.

 In the nativescript application, if we are using the `RadAutoCompleteTextView` inside the `ScrollView` and the length of the form goes beyond your screen size, the scroll event of the RadAutoCompleteTextView doesn't works.

## Reproduction steps

 In mobile application, go to
 ```
display modes -> tokens
 ```
The last field in the form in RadAutoCompleteTextView, keep adding items until the field exceeds 4 lines.
You will not be able to scroll through the tokes added.