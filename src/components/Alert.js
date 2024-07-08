import React from 'react'

export default function Alert(props) {

    const capitalize=(word)=>{
        const lower= word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
   
  return (
    <div style={{height:'45px'}}>

    {props.alert && (
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {props.alert.type === 'danger' ? (
          <>
            <strong>{capitalize('Error')}</strong> : {props.alert.msg}
          </>
        ) : (
          <>
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
          </>
        )}
      </div>
    
    )
  }

</div>
  )
}
