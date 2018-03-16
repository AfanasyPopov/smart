import { Component } from '@angular/core';
import { SelectSearchable } from 'ionic-select-searchable';

import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

class Port {
  public id: number;
  public name: string;
}


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];
  myTreeGrid:any;
  ports: Port[];
  port: Port;

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items, public viewCtrl: ViewController) {
    this.ports = [
      { id: 1, name: 'Tokai' },
      { id: 2, name: 'Vladivostok' },
      { id: 3, name: 'Navlakhi' }
  ];
   }

  ionViewWillEnter(){
      this.refreshSelectedTasks();
  }  
  portChange(event: { component: SelectSearchable, value: any }) {
    console.log('port:', event.value);
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
  doOnLoad() {
    this.myTreeGrid = new dhtmlXGridObject('treegridbox');
    this.myTreeGrid.setImagePath("../../../codebase/imgs/");
    this.myTreeGrid.setHeader("Tree,Plain Text,Long Text,Color,Checkbox");
    this.myTreeGrid.setColumnIds("tree,title,name,price,date");
    this.myTreeGrid.setInitWidths("150,100,100,100,100");
    this.myTreeGrid.setColAlign("left,left,left,center,center");
    this.myTreeGrid.setColTypes("tree,ed,txt,ch,ch");
    this.myTreeGrid.setColSorting("str,str,str,na,str");
    this.myTreeGrid.enableAutoWidth(true);
    this.myTreeGrid.init();
    this.myTreeGrid.load(this.json, "js");
  }
  json= [{
    id: '1001',
    tree: {
      "value": "row A",
      "image": "folder.gif"
    },
    title: "A Time to Kill",
    name: "John Grisham",
    price: "12.99",
    status: "1",
    date: "05/01/1998",
    rows: [{
      id: 'sub_1001',
      tree: "subrowA",
      title: "Blood and Smoke",
      name: "Stephen King",
      price: "0",
      status: "1",
      date: "01/01/2000"
    }, {
      id: 'sub_1002',
      tree: "subrowB",
      title: "Blood and Smoke",
      name: "Stephen King",
      price: "0",
      status: "1",
      date: "01/01/2000"
    }]
    }, {
    id: '1002',
    tree: "row B",
    title: "The Green Mile",
    name: "Stephen King",
    price: "11.10",
    status: "1",
    date: "01/01/1992"
  }]
}
