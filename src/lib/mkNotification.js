import React from 'react';
import { notification } from 'antd';
import {
  RiCloseFill,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
} from 'react-icons/ri';
import capitalize from 'lodash/capitalize';



const renderNotificationIcon = (type) => {
  switch (type) {
    case 'success': return <RiCheckboxCircleFill style={{ color: '#00F7BF' }} />;
    case 'info': return <RiErrorWarningFill style={{ color: '#1BE7FF' }} />;
    case 'warning': return <RiErrorWarningFill style={{ color: '#FFC700' }} />;
    case 'error': return <RiErrorWarningFill style={{ color: '#FF0022' }} />;

    default: return 'success';
  }
};

export const mkNotification = (type, descriptionText) => {
  notification.open({
    key: type === 'error' ? type : descriptionText,
    top: 65,
    message: capitalize(type),
    description: descriptionText,
    icon: renderNotificationIcon(type),
    closeIcon: (
      <RiCloseFill className="remix-icon da-text-color-black-80" size={24} />
    ),
  });
};
