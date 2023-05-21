import { environment } from "../../../environments/environment";

/**
 * Copyright (c) 2023 Banco de Bogota. All Rights Reserved.
 * <p>
 * airbus-expert was developed by Core Banking - Gerencia de Desarrollo.
 * <p>
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * proprietary and confidential. For use this code you need to contact to
 * Banco de Bogotá and request exclusive use permission.
 * <p>
 * This file was write by Jose Buelvas <jbuelva@bancodebogota.com.co>.
 */
declare var UIkit: any;

export class Notification {

  /**
   * Danger notification.
   * @param message notification message
   */
  public danger( message: string ): void {
    UIkit.notification( {
      message,
      status: 'danger',
      pos: environment.notification.position,
      timeout: environment.notification.duration
    } );
  }

  /**
   * Primary notification.
   * @param message notification message
   */
  public primary( message: string ): void {
    UIkit.notification( {
      message,
      status: 'primary',
      pos: environment.notification.position,
      timeout: environment.notification.duration
    } );
  }

  /**
   * Success notification.
   * @param message notification message
   */
  public success( message: string ): void {
    UIkit.notification( {
      message,
      status: 'success',
      pos: environment.notification.position,
      timeout: environment.notification.duration
    } );
  }

  /**
   * Warning notification.
   * @param message notification message
   */
  public warning( message: string ): void {
    UIkit.notification( {
      message,
      status: 'warning',
      pos: environment.notification.position,
      timeout: environment.notification.duration
    } );
  }
}
