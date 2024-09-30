import { StateCreator } from 'zustand'

type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType = {
    notification: Notification
}

export const createNotificationlice: StateCreator<NotificationSliceType> = (set, get) => ({
  notification: {
    text: '',
    error: false,
    show: false
  },
})