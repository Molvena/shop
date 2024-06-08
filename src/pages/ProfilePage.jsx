import { BasicPage } from "../components/BasicPage";
import  Header  from "../components/layaout/header"

export const ProfilePage = () => {
  return (
    <>
    <Header/>
    <BasicPage
    title='Profile Page'
    description='Welcome to Profile - Protected Route'
  />
  </>
  )
}