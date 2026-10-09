import { setGlobalOptions } from 'firebase-functions'
import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { getAuth } from 'firebase-admin/auth'
import { initializeApp } from 'firebase-admin/app'

initializeApp()

setGlobalOptions({ maxInstances: 10 })

const ADMIN_UID = '2kZ56IiXJdZnLbtqsWNqOhmZBA13'

export const setAdminRole = onCall(async () => {
  try {
    await getAuth().setCustomUserClaims(ADMIN_UID, {
      role: 'admin',
    })

    return {
      success: true,
      message: 'Admin role successfully assigned',
      uid: ADMIN_UID,
    }
  } catch (error) {
    console.error(error)

    throw new HttpsError(
      'internal',
      'Failed to assign admin role',
    )
  }
})
