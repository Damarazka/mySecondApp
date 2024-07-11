import { Component, OnInit } from '@angular/core';
import { Filesystem,Directory,Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-filesystem',
  templateUrl: './filesystem.page.html',
  styleUrls: ['./filesystem.page.scss'],
})
export class FilesystemPage implements OnInit {

  constructor() { }

  async writeFile(){
    try {
      const result = await Filesystem.writeFile({
        path:'example.txt',
        data:'this is a test',
        directory:Directory.Documents,
        encoding:Encoding.UTF8
      })
      console.log('file is successed writen:', result)
    } catch (error) {
      console.log('unable to write bos', error)
    }
  }

  async readFile(){
    try {
      const contents = await Filesystem.readFile({
        path:'example.txt',
        directory: Directory.Documents,
        encoding: Encoding.UTF8
      })
      console.log('file contents:', contents)
    } catch (error) {
      console.log('unable to read file bos', error)
    }
  }

  async deleteFile() {
    try {
      await Filesystem.deleteFile({
        path: 'example.txt',
        directory: Directory.Documents,
      });
      console.log('File deleted successfully');
    } catch (e) {
      console.error('Unable to delete file', e);
    }
  }

  ngOnInit() {
  }

}
