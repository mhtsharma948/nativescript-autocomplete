import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel } from "nativescript-ui-autocomplete";
import { RadAutoCompleteTextViewComponent } from "nativescript-ui-autocomplete/angular";

@Component({
    moduleId: module.id,
    selector: "tk-autocomplete-preselected-tokens",
    templateUrl: "autocomplete-preselected-tokens.component.html"
})
export class AutocompletePreselectedTokensComponent implements AfterViewInit {
    private _items: ObservableArray<TokenModel>;
    private countries = ["Australia", "Albania", "Austria", "Argentina", "Maldives", "Bulgaria", "Belgium", "Cyprus", "Italy", "Japan",
        "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
        "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway",
        "Poland", "Romania", "Russia", "Sweden", "Slovenia", "Slovakia", "Turkey", "Ukraine",
        "Vatican City", "Chad", "China", "Chile"];
    private lastIndex: number;
    private isLoaded: boolean;

    constructor() {
        this.initDataItems();
    }

    ngAfterViewInit() {
    }

    @ViewChild("autocomplete", { static: false }) autocomplete: RadAutoCompleteTextViewComponent;

    get dataItems(): ObservableArray<TokenModel> {
        return this._items;
    }

    private initDataItems() {
        this._items = new ObservableArray<TokenModel>();

        for (let i = 0; i < this.countries.length; i++) {
            this._items.push(new TokenModel(this.countries[i], undefined));
        }
    }

    public onLoaded() {
        if (this.isLoaded) {
            return;
        }
        this.autocomplete.autoCompleteTextView.addToken(this._items.getItem(0));
        this.autocomplete.autoCompleteTextView.addToken(this._items.getItem(1));
        this.autocomplete.autoCompleteTextView.addToken(this._items.getItem(2));
        this.lastIndex = 3;
        this.isLoaded = true;
    }

    public onAddToken(args) {
        if (this.dataItems.length <= this.lastIndex) {
            this.lastIndex = 0;
        }

        this.autocomplete.autoCompleteTextView.addToken(this._items.getItem(this.lastIndex));
        this.lastIndex++;
    }
}