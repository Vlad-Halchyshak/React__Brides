import React, {useState, useEffect, ChangeEvent} from 'react'


type Props = {
  status: string;
  updateStatus: (status: string) => void
};

const StatusHook:React.FC<Props> = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
      setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
      setEditMode(true)
    }
    const deActivateEditMode = () => {
      setEditMode(false)
      props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
      setStatus(e.currentTarget.value)
    }
  return (
    
  <div className="Profile_status">
    {!editMode &&
   <div> 
     <span onDoubleClick={activateEditMode}>{props.status || "Clickme"}</span></div>
  }
  {editMode &&
  <div><input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode} value={status} /></div>
  }
     </div>
  )
}

export default StatusHook