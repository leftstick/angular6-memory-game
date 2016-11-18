import 'reflect-metadata';
import 'zone.js/dist/zone';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import Game from './game';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ Game ],
  bootstrap:    [ Game ]
})
export default class MainModule { }