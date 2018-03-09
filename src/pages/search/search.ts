import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items, public viewCtrl: ViewController) { }

  ionViewWillEnter(){
      this.refreshSelectedTasks();
  }   
  refreshSelectedTasks(){
    var count = gantt.getTaskCount();
    console.log ('getTaskCount:'+ count)
    this.currentItems=[];
    for (let index = 0; index < count; index++) {
      if (gantt.getTaskByIndex(index).checked){
        this.currentItems.push(gantt.getTaskByIndex(index));
      }    
    }

  } 
    /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
  deleteChip(chip: Element) {
    var id= Number(chip.id.slice(4));
    gantt.getTask(id).checked = false;
    //chip.remove();
    this.refreshSelectedTasks();
    gantt.refreshData();
  }

}
