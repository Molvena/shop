import { BasicPage } from "../components/BasicPage";
import Header from "../components/layaout/header"

export const SettingPage = () => {
  return (
    <>
    <Header/>
    <BasicPage
      title='Setting Page'
      description='Welcome to Settings - Protected Route'
    />
    </>
  );
};
