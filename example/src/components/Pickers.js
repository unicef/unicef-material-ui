import React, { useState } from 'react'
import {
  UPeoplePicker,
  UDatePicker,
  UTimePicker,
  UKeyboardDatePicker,
  UKeyboardTimePicker,
  UDateTimePicker,
  UKeyboardDateTimePicker,
  USelectPicker,
  UIconPicker,
  ActiveKeyboardDateTimePicker,
} from 'unicef-material-ui'
import { GraphPeoplePickerExample } from '../components'
import { Grid, Typography, Avatar } from '@mui/material'


export default function Pickers() {
  // People picker options
  const peopleOptions = [
    {
      value: 1,
      label: 'Juan Merlos Tevar',
      subLabel: 'Manager',
      avatar: null,
    },
    {
      value: 2,
      label: 'Suresh Sevarthi',
      subLabel: 'Front-end Developer',
      avatar: null,
    },
    {
      value: 3,
      label: 'Kundal Singh Mehra',
      subLabel: 'Back-end Developer',
      avatar: (
        <Avatar
          src={
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixvalue=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
          }
        />
      ),
    },
    {
      value: 4,
      label: 'Gia Zarina Santos',
      subLabel: 'Manager',
      avatar: (
        <Avatar
          src={
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixvalue=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
          }
        />
      ),
    },
    {
      value: 5,
      label: 'Cory Kleinschmidt',
      subLabel: 'Information technology specialist',
      avatar: (
        <Avatar
          src={
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixvalue=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
          }
        />
      ),
    },
    {
      value: 6,
      label: 'Renga Narayanan',
      subLabel: 'Back-end Developer',
      avatar: (
        <Avatar
          src={
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
          }
        />
      ),
    },
  ]

  const regionsOptions = [
    {
      value: 'EAPR',
      label: 'EAPR',
      subLabel: 'East Asia and Pacific Region',
    },
    {
      value: 'ECAR',
      label: 'ECAR',
      subLabel: 'Europe and Central Asia Region',
    },
    {
      value: 'ESAR',
      label: 'ESAR',
      subLabel: 'Estern and Southern Africa Region',
    },
    {
      value: 'LACR',
      label: 'LACR',
      subLabel: 'Latin America and the Caribbean',
    },
    {
      value: 'MENAR',
      label: 'MENAR',
      subLabel: 'Middle East and North Africa',
    },
    {
      value: 'SAR',
      label: 'SAR',
      subLabel: 'South Asia Region',
    },
    {
      value: 'WCAR',
      label: 'WCAR',
      subLabel: 'West and Central Africa Region',
    },
  ]

  // SVG icon need to be converted to a blob
  const svgToBlob = svg => {
    if (svg) {
      const blob = new Blob([svg], { type: 'image/svg+xml' })
      return URL.createObjectURL(blob)
    }
    return ''
  }

  const iconOptions = [
    {
      value: 1,
      label: 'Sample 1',
      image: '<svg width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M54.736 27.718c0 14.921-12.097 27.019-27.018 27.019C12.797 54.737.699 42.639.699 27.718.7 12.797 12.797.701 27.718.701c14.921 0 27.018 12.096 27.018 27.017z\" stroke=\"#00ADEE\" stroke-dasharray=\"0.994,0.994\"/><path d=\"M17.047 14.349c1.579-1.03 4.345-.638 4.802-.554.189.033.672.17 1.26.435.79 1.613.726 5.578-.808 8.44 0 0-6.437-2.955-7.291-6.1a6.076 6.076 0 0 1 2.037-2.221zm8.229 1.364c-.055-.06-.114-.114-.171-.17.059.055.115.112.17.17zM46.06 34.529l-17.923-8.994.006-.091a1.3 1.3 0 0 0 .017-.25c-.002-.002-.007-.006-.007-.008.038-1.35-.024-6.33-2.775-9.361.116.123.234.242.34.378 0 0-3.346-4.917-6.597-5.088-1.576-.081-2.744 1.134-3.113 1.607-.366.473-1.966 3.152-1.857 7.021 0 0-.015-1.485.794-3.052-1.412 2.964-.614 5.214.22 6.663.178 1.522 1.016 2.595 1.404 3.174.742 1.117 2.71 2.72 3.377 3.16-.344 1.402-.95 3.964-1.191 5.641-.28 1.94-.483 7.392-.483 7.392l6.315 1.603s.214-.267.24-.631c.018-.196.76-7.573 1.313-10.45l11.29 5.822.531-.864 4.431 2.285 3.668-5.957z\" fill=\"#00ADEE\"/></g></svg>',
      avatar: (
        <Avatar
          src={svgToBlob("<svg width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M54.736 27.718c0 14.921-12.097 27.019-27.018 27.019C12.797 54.737.699 42.639.699 27.718.7 12.797 12.797.701 27.718.701c14.921 0 27.018 12.096 27.018 27.017z\" stroke=\"#00ADEE\" stroke-dasharray=\"0.994,0.994\"/><path d=\"M17.047 14.349c1.579-1.03 4.345-.638 4.802-.554.189.033.672.17 1.26.435.79 1.613.726 5.578-.808 8.44 0 0-6.437-2.955-7.291-6.1a6.076 6.076 0 0 1 2.037-2.221zm8.229 1.364c-.055-.06-.114-.114-.171-.17.059.055.115.112.17.17zM46.06 34.529l-17.923-8.994.006-.091a1.3 1.3 0 0 0 .017-.25c-.002-.002-.007-.006-.007-.008.038-1.35-.024-6.33-2.775-9.361.116.123.234.242.34.378 0 0-3.346-4.917-6.597-5.088-1.576-.081-2.744 1.134-3.113 1.607-.366.473-1.966 3.152-1.857 7.021 0 0-.015-1.485.794-3.052-1.412 2.964-.614 5.214.22 6.663.178 1.522 1.016 2.595 1.404 3.174.742 1.117 2.71 2.72 3.377 3.16-.344 1.402-.95 3.964-1.191 5.641-.28 1.94-.483 7.392-.483 7.392l6.315 1.603s.214-.267.24-.631c.018-.196.76-7.573 1.313-10.45l11.29 5.822.531-.864 4.431 2.285 3.668-5.957z\" fill=\"#00ADEE\"/></g></svg>")}
        />
      ),
    },
    {
      value: 2,
      label: 'Sample 2',
      image: '<svg width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M55 28c0 14.912-12.088 27-27 27S1 42.912 1 28 13.088 1 28 1s27 12.088 27 27z\" stroke=\"#00ADEE\" stroke-dasharray=\"0.994,0.994\"/><path d=\"M42.452 36.714c-7.143-4.519-13.323-.377-13.323.331v-15.06c0-2.678 3.54-4.12 7.906-4.12 2.1 0 4.002.499 5.417 1.314v17.535zm-15.476.331c0-.708-6.186-4.85-13.327-.33V19.178c1.415-.815 3.318-1.315 5.417-1.315 4.37 0 7.91 1.443 7.91 4.12v15.061zm1.181-18.395c-1.105-1.065-7.462-4.764-16.157-.994V38.33h13.174c.453.392 1.528.669 2.786.669 1.255 0 2.333-.277 2.788-.669H44V17.656c-8.338-3.698-15 .214-15.843.994z\" fill=\"#00ADEE\"/></g></svg>',
      avatar: (
        <Avatar
          src={svgToBlob("<svg width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M55 28c0 14.912-12.088 27-27 27S1 42.912 1 28 13.088 1 28 1s27 12.088 27 27z\" stroke=\"#00ADEE\" stroke-dasharray=\"0.994,0.994\"/><path d=\"M42.452 36.714c-7.143-4.519-13.323-.377-13.323.331v-15.06c0-2.678 3.54-4.12 7.906-4.12 2.1 0 4.002.499 5.417 1.314v17.535zm-15.476.331c0-.708-6.186-4.85-13.327-.33V19.178c1.415-.815 3.318-1.315 5.417-1.315 4.37 0 7.91 1.443 7.91 4.12v15.061zm1.181-18.395c-1.105-1.065-7.462-4.764-16.157-.994V38.33h13.174c.453.392 1.528.669 2.786.669 1.255 0 2.333-.277 2.788-.669H44V17.656c-8.338-3.698-15 .214-15.843.994z\" fill=\"#00ADEE\"/></g></svg>")}
        />
      ),
    },
    {
      value: 3,
      label: 'Sample 3',
      image: '<svg width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M55 28c0 14.91-12.088 27-27 27S1 42.91 1 28 13.088 1 28 1s27 12.09 27 27z\" stroke=\"#00ADEE\" stroke-dasharray=\"0.994,0.994\"/><path d=\"M29.382 32.99c-.387.249-.767.484-1.138.72l.056-4.238c2.013.804 1.863 1.867 1.895 2.32.055.336-.222.832-.813 1.197m-4.784-1.197c.033-.467-.128-1.58 2.078-2.39l.05 4.418c-.425-.269-.866-.546-1.313-.83-.591-.366-.868-.862-.815-1.198m8.818-17.763c-.978-.801-1.659-.613-2.64 1.136-.647 1.156-1.68 1.295-2.31 1.26l.004-.231c.733-.364 1.25-1.102 1.25-1.974a2.222 2.222 0 0 0-4.443 0c0 .872.516 1.61 1.25 1.973l.002.232c-.63.035-1.663-.104-2.31-1.26-.98-1.749-1.661-1.937-2.637-1.136-.983.804-4.858 5.434-9.582 5.01 0 0 .936 2.126 3.489 1.655 0 0 1.365 1.416 3.579.424 0 0 1.15 1.038 2.98.095 0 0 1.361 1.04 2.81.14 0 0 .82.595 1.731.442l.058 5.345c-.103-.02-.186-.044-.293-.064-.006-.002-1.588-.34-3.26-.809-1.61-.423-3.378-1.106-3.639-1.463.022-.022.058-.039.105-.06.143-.078.387-.155.678-.214.59-.12 1.393-.182 2.197-.214 1.601-.058 1.89.011 1.918.017.003-.05.926.108 1.18-.833-.01-.008.019-.046.002-.069-.052-.647-.55-.68-.957-.755-.663-.086-.317-.052-1.21-.042-1.466.109-5.98-.257-6.549 2.12 0 .068-.005.11-.012.168.189 2.07 4.475 2.968 7.578 3.587-1.053.72-1.616 1.66-1.84 2.872-.108 1.295.92 2.527 3.306 3.904-1.812 1.28-3.004 2.486-2.906 3.941C23.115 40.411 24.16 42 26.22 43c.006.003.007-.003.012 0h.006s-1.441-2.2-1.538-3.402c-.095-.701.305-1.74 2.057-2.988l.05 4.395h.008c.013.373.3.672.664.672.364 0 .652-.299.664-.672h.006l.058-4.28c1.616 1.196 1.98 2.192 1.887 2.873-.096 1.201-1.534 3.402-1.534 3.402h.002s.006.003.015 0c2.057-1 3.106-2.588 3.274-3.773.096-1.455-1.094-2.66-2.904-3.941 2.383-1.377 3.412-2.609 3.305-3.904-.223-1.212-.787-2.152-1.842-2.872 3.105-.619 7.389-1.517 7.579-3.587a.912.912 0 0 1-.014-.168c-.566-2.377-5.084-2.011-6.548-2.12-.893-.01-.547-.044-1.209.042-.407.075-.906.108-.959.755-.016.023.014.061.005.07.253.94 1.179.782 1.18.832.026-.006.314-.075 1.917-.017.804.032 1.605.094 2.196.214a2.7 2.7 0 0 1 .678.213c.047.022.085.039.107.06-.26.358-2.028 1.041-3.638 1.464-1.676.468-3.257.807-3.263.809l-.113.025.069-5.308c.918.16 1.741-.44 1.741-.44 1.448.9 2.812-.14 2.812-.14 1.83.943 2.98-.095 2.98-.095 2.213.992 3.577-.424 3.577-.424 2.555.471 3.493-1.655 3.493-1.655-4.727.424-8.603-4.206-9.584-5.01\" fill=\"#00ADEE\"/></g></svg>',
      avatar: (
        <Avatar
          src={svgToBlob("<svg width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M55 28c0 14.91-12.088 27-27 27S1 42.91 1 28 13.088 1 28 1s27 12.09 27 27z\" stroke=\"#00ADEE\" stroke-dasharray=\"0.994,0.994\"/><path d=\"M29.382 32.99c-.387.249-.767.484-1.138.72l.056-4.238c2.013.804 1.863 1.867 1.895 2.32.055.336-.222.832-.813 1.197m-4.784-1.197c.033-.467-.128-1.58 2.078-2.39l.05 4.418c-.425-.269-.866-.546-1.313-.83-.591-.366-.868-.862-.815-1.198m8.818-17.763c-.978-.801-1.659-.613-2.64 1.136-.647 1.156-1.68 1.295-2.31 1.26l.004-.231c.733-.364 1.25-1.102 1.25-1.974a2.222 2.222 0 0 0-4.443 0c0 .872.516 1.61 1.25 1.973l.002.232c-.63.035-1.663-.104-2.31-1.26-.98-1.749-1.661-1.937-2.637-1.136-.983.804-4.858 5.434-9.582 5.01 0 0 .936 2.126 3.489 1.655 0 0 1.365 1.416 3.579.424 0 0 1.15 1.038 2.98.095 0 0 1.361 1.04 2.81.14 0 0 .82.595 1.731.442l.058 5.345c-.103-.02-.186-.044-.293-.064-.006-.002-1.588-.34-3.26-.809-1.61-.423-3.378-1.106-3.639-1.463.022-.022.058-.039.105-.06.143-.078.387-.155.678-.214.59-.12 1.393-.182 2.197-.214 1.601-.058 1.89.011 1.918.017.003-.05.926.108 1.18-.833-.01-.008.019-.046.002-.069-.052-.647-.55-.68-.957-.755-.663-.086-.317-.052-1.21-.042-1.466.109-5.98-.257-6.549 2.12 0 .068-.005.11-.012.168.189 2.07 4.475 2.968 7.578 3.587-1.053.72-1.616 1.66-1.84 2.872-.108 1.295.92 2.527 3.306 3.904-1.812 1.28-3.004 2.486-2.906 3.941C23.115 40.411 24.16 42 26.22 43c.006.003.007-.003.012 0h.006s-1.441-2.2-1.538-3.402c-.095-.701.305-1.74 2.057-2.988l.05 4.395h.008c.013.373.3.672.664.672.364 0 .652-.299.664-.672h.006l.058-4.28c1.616 1.196 1.98 2.192 1.887 2.873-.096 1.201-1.534 3.402-1.534 3.402h.002s.006.003.015 0c2.057-1 3.106-2.588 3.274-3.773.096-1.455-1.094-2.66-2.904-3.941 2.383-1.377 3.412-2.609 3.305-3.904-.223-1.212-.787-2.152-1.842-2.872 3.105-.619 7.389-1.517 7.579-3.587a.912.912 0 0 1-.014-.168c-.566-2.377-5.084-2.011-6.548-2.12-.893-.01-.547-.044-1.209.042-.407.075-.906.108-.959.755-.016.023.014.061.005.07.253.94 1.179.782 1.18.832.026-.006.314-.075 1.917-.017.804.032 1.605.094 2.196.214a2.7 2.7 0 0 1 .678.213c.047.022.085.039.107.06-.26.358-2.028 1.041-3.638 1.464-1.676.468-3.257.807-3.263.809l-.113.025.069-5.308c.918.16 1.741-.44 1.741-.44 1.448.9 2.812-.14 2.812-.14 1.83.943 2.98-.095 2.98-.095 2.213.992 3.577-.424 3.577-.424 2.555.471 3.493-1.655 3.493-1.655-4.727.424-8.603-4.206-9.584-5.01\" fill=\"#00ADEE\"/></g></svg>")}
        />
      ),
    },
    {
      value: 4,
      label: 'Sample 4',
      image: '<svg width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M55 28c0 14.912-12.088 27-27 27S1 42.912 1 28 13.088 1 28 1s27 12.088 27 27z\" stroke=\"#00ADEE\" stroke-dasharray=\"0.994,0.994\"/><path d=\"M40.357 29.53v-3.32c0-2.103-1.934-3.922-4.497-3.922h-5.99l-.033-1.844a.972.972 0 0 0-.975-.964h-2.344v-1.185c.203-.118.37-.266.513-.45h4.988c.333.423.827.716 1.41.716a1.79 1.79 0 0 0 1.801-1.78c0-.983-.808-1.781-1.801-1.781-.596 0-1.102.312-1.429.755h-4.944c-.333-.443-.834-.755-1.432-.755-.595 0-1.103.312-1.43.755h-5.46c-.326-.443-.83-.755-1.424-.755-.997 0-1.804.798-1.804 1.782a1.79 1.79 0 0 0 1.804 1.779c.58 0 1.074-.293 1.402-.716h5.504c.145.186.317.338.522.451v1.184h-2.485a.97.97 0 0 0-.974.964v1.844H14v5.752h8.096c.794 1.572 1.851 2.35 3.441 2.35 1.587 0 2.91-.778 3.705-2.35h2.912c.87 0 1.19.552 1.282 1.611a.935.935 0 0 0-.43.779c0 .53.437.962.975.962h6.043A.97.97 0 0 0 41 30.43a.956.956 0 0 0-.643-.9m-3.44 2.921c.53 1.045 2.913 6.534 2.913 7.32 0 4.306-5.824 4.306-5.824 0 0-.786 2.383-6.537 2.91-7.32\" fill=\"#00ADEE\"/></g></svg>',
      avatar: (
        <Avatar
          src={svgToBlob("<svg width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M55 28c0 14.912-12.088 27-27 27S1 42.912 1 28 13.088 1 28 1s27 12.088 27 27z\" stroke=\"#00ADEE\" stroke-dasharray=\"0.994,0.994\"/><path d=\"M40.357 29.53v-3.32c0-2.103-1.934-3.922-4.497-3.922h-5.99l-.033-1.844a.972.972 0 0 0-.975-.964h-2.344v-1.185c.203-.118.37-.266.513-.45h4.988c.333.423.827.716 1.41.716a1.79 1.79 0 0 0 1.801-1.78c0-.983-.808-1.781-1.801-1.781-.596 0-1.102.312-1.429.755h-4.944c-.333-.443-.834-.755-1.432-.755-.595 0-1.103.312-1.43.755h-5.46c-.326-.443-.83-.755-1.424-.755-.997 0-1.804.798-1.804 1.782a1.79 1.79 0 0 0 1.804 1.779c.58 0 1.074-.293 1.402-.716h5.504c.145.186.317.338.522.451v1.184h-2.485a.97.97 0 0 0-.974.964v1.844H14v5.752h8.096c.794 1.572 1.851 2.35 3.441 2.35 1.587 0 2.91-.778 3.705-2.35h2.912c.87 0 1.19.552 1.282 1.611a.935.935 0 0 0-.43.779c0 .53.437.962.975.962h6.043A.97.97 0 0 0 41 30.43a.956.956 0 0 0-.643-.9m-3.44 2.921c.53 1.045 2.913 6.534 2.913 7.32 0 4.306-5.824 4.306-5.824 0 0-.786 2.383-6.537 2.91-7.32\" fill=\"#00ADEE\"/></g></svg>")}
        />
      ),
    },
    {
      value: 5,
      label: 'Sample 5',
      image: '<svg width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M55 28c0 14.912-12.088 27-27 27S1 42.912 1 28 13.088 1 28 1s27 12.088 27 27z\" stroke=\"#00ADEE\" stroke-dasharray=\"0.994,0.994\"/><path d=\"M27.499 26.986c1.744 0 3.221-.648 4.459-1.91 1.236-1.27 1.85-2.79 1.85-4.591 0-1.788-.614-3.324-1.85-4.592C30.72 14.62 29.243 14 27.498 14c-1.74 0-3.234.621-4.453 1.893-1.244 1.268-1.852 2.804-1.852 4.592 0 1.8.608 3.32 1.852 4.591 1.22 1.262 2.712 1.91 4.454 1.91m9.706-2.619l-6.667 7.035v9.564h.053V41h5.468v-4.13l5.574-7.58c.222-.283.367-.631.367-1.012V16.63c0-.91-.72-1.653-1.609-1.653-.882 0-1.604.742-1.604 1.653v6.728c.392.086.759.254 1.055.553.854.858.875 2.268.044 3.144l-3.044 3.22-.416-.416 3.048-3.211a1.68 1.68 0 0 0-.03-2.315 1.6 1.6 0 0 0-1.474-.422 1.577 1.577 0 0 0-.765.457m-19.408 0l6.664 7.035v9.564h-.053V41h-5.464v-4.13l-5.575-7.58A1.631 1.631 0 0 1 13 28.278V16.63c0-.91.72-1.653 1.609-1.653.884 0 1.604.742 1.604 1.653v6.728c-.389.086-.758.254-1.055.553a2.274 2.274 0 0 0-.041 3.144l3.04 3.22.415-.416-3.045-3.211a1.681 1.681 0 0 1 .028-2.315 1.618 1.618 0 0 1 1.475-.422c.295.076.56.233.767.457\" fill=\"#00ADEE\"/></g></svg>',
      avatar: (
        <Avatar
          src={svgToBlob("<svg width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M55 28c0 14.912-12.088 27-27 27S1 42.912 1 28 13.088 1 28 1s27 12.088 27 27z\" stroke=\"#00ADEE\" stroke-dasharray=\"0.994,0.994\"/><path d=\"M27.499 26.986c1.744 0 3.221-.648 4.459-1.91 1.236-1.27 1.85-2.79 1.85-4.591 0-1.788-.614-3.324-1.85-4.592C30.72 14.62 29.243 14 27.498 14c-1.74 0-3.234.621-4.453 1.893-1.244 1.268-1.852 2.804-1.852 4.592 0 1.8.608 3.32 1.852 4.591 1.22 1.262 2.712 1.91 4.454 1.91m9.706-2.619l-6.667 7.035v9.564h.053V41h5.468v-4.13l5.574-7.58c.222-.283.367-.631.367-1.012V16.63c0-.91-.72-1.653-1.609-1.653-.882 0-1.604.742-1.604 1.653v6.728c.392.086.759.254 1.055.553.854.858.875 2.268.044 3.144l-3.044 3.22-.416-.416 3.048-3.211a1.68 1.68 0 0 0-.03-2.315 1.6 1.6 0 0 0-1.474-.422 1.577 1.577 0 0 0-.765.457m-19.408 0l6.664 7.035v9.564h-.053V41h-5.464v-4.13l-5.575-7.58A1.631 1.631 0 0 1 13 28.278V16.63c0-.91.72-1.653 1.609-1.653.884 0 1.604.742 1.604 1.653v6.728c-.389.086-.758.254-1.055.553a2.274 2.274 0 0 0-.041 3.144l3.04 3.22.415-.416-3.045-3.211a1.681 1.681 0 0 1 .028-2.315 1.618 1.618 0 0 1 1.475-.422c.295.076.56.233.767.457\" fill=\"#00ADEE\"/></g></svg>")}
        />
      ),
    }
  ]

  const [selectedDate, handleDateChange] = useState(new Date())
  const [options, setOptions] = useState(undefined)
  const [loading, setLoading] = useState(false)
  const [errorMessage] = useState(null)

  // Handle loading the people
  const handleLoadPeople = event => {
    setLoading(true)
    setOptions(undefined)
    // In case of API, fetch the API
    //If response is ok, set the new options
    setTimeout(() => {
      setLoading(false)
      setOptions(peopleOptions)
    }, 1000)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" style={{ margin: '16px 0px' }}>
          Icon picker
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <UIconPicker
          label="Icon Select"
          placeholder="Select Icon ..."
          options={iconOptions}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <UIconPicker
          label="Multi Icon Select"
          placeholder="Select Icon ..."
          options={iconOptions}
          isMulti={true}
          showLabelHelp={true}
          InputLabelHelpProps={{
            type: 'link',
            link: 'https://unicef.github.io/',
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <UIconPicker
          label="Icon Select"
          placeholder="Select Icon ..."
          options={iconOptions}
          value={iconOptions[2]}
          readOnly={true}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5" style={{ margin: '16px 0px' }}>
          People picker
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <UPeoplePicker
          label="Select"
          placeholder="Select people ..."
          options={peopleOptions}
          showLabelHelp={true}
          InputLabelHelpProps={{
            type: 'link',
            link: 'https://unicef.github.io/',
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <UPeoplePicker
          label="Multi Select"
          TextFieldProps={{
            helperText: 'Please select multiple people from list',
          }}
          placeholder="Select people ..."
          options={peopleOptions}
          isMulti
          showLabelHelp={true}
          InputLabelHelpProps={{
            type: 'tooltip',
            tooltipTitle: 'Please select multiple people from list',
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <UPeoplePicker
          label="Loading state example"
          isLoading={true}
          placeholder="Select people ..."
          options={peopleOptions}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <UPeoplePicker
          label="Async example"
          isLoading={loading}
          placeholder="Select people ..."
          options={options}
          TextFieldProps={{
            onChange: event => handleLoadPeople(event),
          }}
          showNoOptionsWithEmptyTextField={false}
          errorOptionsMessage={errorMessage}
          isMulti
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <UPeoplePicker
          label="Display error on load"
          isLoading={false}
          placeholder="Select people ..."
          options={undefined}
          errorOptionsMessage={'Could not load options'}
          isMulti
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <UPeoplePicker
          label="Display validation error"
          isLoading={false}
          placeholder="Select people ..."
          options={undefined}
          TextFieldProps={{
            error: true,
            helperText: 'Validation error message',
          }}
          isMulti
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5" style={{ margin: '16px 0px' }}>
          Select
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <USelectPicker
          label="Regions"
          TextFieldProps={{
            helperText:
              'Please select multiple regions from the list with dark icon variant',
          }}
          placeholder="Select regions ..."
          options={regionsOptions}
          iconVariant="dark"
          isMulti
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <USelectPicker
          label="Regions"
          TextFieldProps={{
            helperText: 'Please select multiple regions from the list',
          }}
          placeholder="Select regions ..."
          options={regionsOptions}
          isMulti
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <USelectPicker
          label="Region"
          TextFieldProps={{
            helperText: 'Please select region from the list',
          }}
          placeholder="Select region ..."
          options={regionsOptions}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5">Date picker</Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <UDatePicker
          label="Date"
          value={selectedDate}
          onChange={handleDateChange}
          showLabelHelp={true}
          InputLabelHelpProps={{
            tooltipTitle: 'Date',
          }}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <UKeyboardDatePicker
          label="With keyboard"
          value={selectedDate}
          onChange={handleDateChange}
          showLabelHelp={true}
          InputLabelHelpProps={{
            tooltipTitle: 'With keyboard',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Time picker</Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <UTimePicker
          label="Time"
          value={selectedDate}
          onChange={handleDateChange}
          showLabelHelp={true}
          InputLabelHelpProps={{
            tooltipTitle: 'Time',
          }}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <UKeyboardTimePicker
          label="With keyboard"
          value={selectedDate}
          onChange={handleDateChange}
          showLabelHelp={true}
          InputLabelHelpProps={{
            tooltipTitle: 'With keyboard',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Date Time picker</Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <UDateTimePicker
          label="Date and Time"
          value={selectedDate}
          onChange={handleDateChange}
          showLabelHelp={true}
          InputLabelHelpProps={{
            tooltipTitle: 'Date and time',
          }}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <UKeyboardDateTimePicker
          label="With keyboard"
          value={selectedDate}
          onChange={handleDateChange}
          showLabelHelp={true}
          InputLabelHelpProps={{
            tooltipTitle: 'With keyboard',
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <ActiveKeyboardDateTimePicker 
        label="readonly keyboard"
        value={selectedDate}
        onChange={handleDateChange}
        showLabelHelp={true}
        InputLabelHelpProps={{
          tooltipTitle: 'readonly keyboard',
        }}
        readOnly={true}
        />
      </Grid>
      <Grid item xs={12}>
        <GraphPeoplePickerExample />
      </Grid>
    </Grid>
  )
}
