import React from 'react';
import Swal from 'sweetalert2';

const UseAlertMessage = ({message,type}) => {
    return Swal.fire({
            position: "top-center",
            icon:type,
            title:message,
            showConfirmButton: false,
            timer: 1500 });
};

export default UseAlertMessage;