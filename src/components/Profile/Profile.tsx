/* eslint-disable jsx-a11y/alt-text */
import React,{ChangeEvent, useState } from 'react'
import vito from '../../images/vito.jpg'
import CoolSlider from '../Slider/slider'
import Loading from '../Loading/loading'
import ProfileStatus from './Status'
import ProfileDataForm from './profileForm'
import chatprofile from '../../assets/chat-profile.jpg'
import { ProfileType } from '../../types/types'


type Props = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile: React.FC<Props> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {


    let [editMode, setEditMode] = useState(false)
    if (!profile) {
        //@ts-ignore
        return <Loading style={{ padding: "150px" }} />
    }

    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData)
            .then(() => {
                setEditMode(false)
            }
            )
    }
    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }
    
    return <div className="content">

        <div className="choose_photo">
            {isOwner &&
                <input type="file" id="upload" onChange={mainPhotoSelected} />}
            
            <label htmlFor="upload" className="Label_yeah">Upload</label>
        </div>


        <div className="content__section">
            <img src={profile.photos.large || chatprofile} />
            <div className="name-profile">
                <div>
                    <h3>Vito Corleone</h3>
                    <p>63 years old, Sicily, Italy
                </p>
                </div>
                {<p><ProfileStatus status={status} updateStatus={updateStatus} /></p>}


                <div className="parameters">
                    <div className="table-wrap">
                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <td>Birth Date</td>
                                    <td className="value">07.12.1891</td>
                                </tr>
                                <tr>
                                    <td>Height</td>
                                    <td className="value">183 cm</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td className="value">82 kg</td>
                                </tr>
                                <tr>
                                    <td>Eyes</td>
                                    <td className="value">Brown</td>
                                </tr>
                                <tr>
                                    <td>Hair</td>
                                    <td className="value">Dark brown</td>
                                </tr>
                                <tr>
                                    <td>Build</td>
                                    <td className="value">Massive</td>
                                </tr>
                                <tr>
                                    <td>Glasses</td>
                                    <td className="value">No</td>
                                </tr>
                                <tr>
                                    <td>Smoking</td>
                                    <td className="value">Yes</td>
                                </tr>
                                <tr>
                                    <td>Drinking</td>
                                    <td className="value">Yes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="parameters2">
                <div className="action_btns">
                    <a href="#0" className="btn_inv">Invite to Video Chat</a>
                    <a href="#0" className="btn_start_chat">Start a Chat</a>
                    <a href="#0" className="btn_write_letter">Write a Letter</a>
                    <a href="#0" className="btn_add_to_fav">Add to Favourites</a>
                    <a href="#0" className="btn_like_her">Like Him</a>
                </div>
                <div className="table-wrap">
                    <table className="table-params">
                        <tbody>
                            <tr>
                                <td>Religion</td>
                                <td><a href="0">Roman Catholic</a></td>
                            </tr>
                            <tr>
                                <td>Title</td>
                                <td><a href="0">Godfather Don</a></td>
                            </tr>
                            <tr>
                                <td>Field of work</td>
                                <td><a href="0">Business industry</a></td>
                            </tr>
                            <tr>
                                <td>Occupation</td>
                                <td><a href="0">Crime Boss</a></td>
                            </tr>
                            <tr>
                                <td>Marital status</td>
                                <td><a href="0">Married</a></td>
                            </tr>
                            <tr>
                                <td>Want to have children?</td>
                                <td><a href="0">No, i have enough:)</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {editMode
                    //@ts-ignore
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData goEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}

            </div>
        </div>
        <div className="down_buttons">
            <a href="#" className="btn_chat">Start a Chat</a>
            <a href="#" className="btn_camera">Invite To Video Chat</a>
            <a href="#" className="btn_letter">Send letter</a>
        </div>
        <CoolSlider />
        
    </div>
    
    
}



type ProfileData = {
    profile: ProfileType
    isOwner: boolean
    goEditMode: () => void
}

const ProfileData: React.FC<ProfileData> = ({ profile, isOwner, goEditMode }) => {
    return <div className="Info_details"> <div>Full name: {profile.fullName}</div>
        <div>About me: {profile.aboutMe}</div>
        <div>Looking for a Job: {profile.lookingForAJob ? "yes" : "no"}</div>
        {profile.lookingForAJob &&
            <div>My skills: {profile.lookingForAJobDescription}</div>}
        {isOwner && <div className="edit_button"><button onClick={goEditMode}>edit</button></div>}
    </div>
}


export default Profile