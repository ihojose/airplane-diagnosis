import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

@Injectable( {
  providedIn: 'root'
} )
export class LocalStorageService<T = any> {

  constructor( @Inject( LOCAL_STORAGE ) private storage: StorageService ) {
  }

  /**
   * Save any data in local storage
   * @param key unique key
   * @param value any value
   */
  public save( key: string, value: T ): void {
    this.storage.set( key, value );
  }

  /**
   * Get local storage data
   * @param key unique key
   */
  public get( key: string ): T | undefined {
    return this.storage.get( key );
  }

  /**
   * Remove local storage data
   * @param key
   */
  public delete( key: string ): void {
    if ( this.get( key ) !== undefined ) {
      this.storage.remove( key );
    }
  }
}
