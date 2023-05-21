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

export const environment = {
  notification: {
    duration: 5000,                   // Time in millis
    position: 'bottom-right'          // (top-left, top-center, top-right, bottom-left, bottom-right, bottom-center)
  },
  api: {
    auth: 'http://localhost:1234/account/login',
    account: 'http://localhost:1234/account',
    get_rule: 'http://localhost:1234/rule/{id}'
  }
}
