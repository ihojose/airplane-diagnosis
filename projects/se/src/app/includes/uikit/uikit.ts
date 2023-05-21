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
import { Modal } from "./modal";
import { Notification } from "./notification";
import { OffCanvas } from "./off-canvas";

declare var UIkit: any;

export class Uikit {
  /**
   * UIKit Notifications
   * @see https://getuikit.com/docs/notification
   */
  public static notification(): Notification {
    return new Notification();
  }

  /**
   * UIkit offcanvas
   * @see https://getuikit.com/docs/offcanvas
   * @param element native element
   * @param options options {}
   */
  public static offcanvas( element: string, options: {} = {} ): OffCanvas {
    return new OffCanvas( element, options );
  }

  /**
   * UIkit Modal
   * @see https://getuikit.com/docs/modal
   * @param selector element selector #demo
   * @param options options
   */
  public static modal( selector: string = '', options: { bgClose?: boolean, keyboard?: boolean } = {} ): Modal {
    return new Modal( selector, options );
  }
}
