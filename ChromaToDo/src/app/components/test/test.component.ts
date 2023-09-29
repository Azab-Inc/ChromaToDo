import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ITestObj {
  id: number;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styles: [],
})
export class TestComponent {
  addValue() {
    chrome.storage.sync.get(['TestKeyObj'], (result: any) => {
      const currentData: ITestObj[] = result['TestKeyObj'] || []; // Initialize to an empty array if it doesn't exist

      const newData: ITestObj = { id: 5, title: 'Title 5', desc: 'Desc 5' };

      currentData.push(newData);

      chrome.storage.sync.set({ TestKeyObj: currentData }, () => {
        alert('Set new data');
      });
    });
  }

  showValue() {
    chrome.storage.sync.get(['TestKeyObj'], (result: any) => {
      const outPut: ITestObj[] = result['TestKeyObj'];

      let outPutStr: string = '';
      outPut.map((item: ITestObj) => {
        outPutStr += item.id + ' ' + item.title + ' ' + item.desc + '\n';
      });

      alert(outPutStr);
    });
  }

  deleteAll() {
    chrome.storage.sync.remove(['TestKeyObj'], () => {
      alert('Data in TestKeyObj has been cleared');
    });
  }
}
