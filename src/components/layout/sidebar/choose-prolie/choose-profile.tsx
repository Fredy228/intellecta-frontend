"use client";

import { Dispatch, type FC, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SchoolIcon from "@mui/icons-material/School";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import { set } from "local-storage";

import styles from "./choose-profile.module.scss";

import { selectProfile, selectProfiles } from "@/redux/user/selectors";
import { RoleEnum } from "@/enums/user/role-enum";
import { setCurrentProfile } from "@/redux/user/slice";
import { ProfileInterface } from "@/interfaces/profile";

const RoleIcon = {
  [RoleEnum.STUDENT]: <SchoolIcon />,
  [RoleEnum.TEACHER]: <CoPresentIcon />,
  [RoleEnum.OWNER_UNIVERSITY]: <AssuredWorkloadIcon />,
  [RoleEnum.MODER_UNIVERSITY]: <SupervisorAccountIcon />,
  [RoleEnum.MAKER]: <LogoDevIcon />,
};

type Props = {
  setShow: Dispatch<SetStateAction<boolean>>;
};
const ChooseProfile: FC<Props> = ({ setShow }) => {
  const currentProfile = useSelector(selectProfile);
  const currentProfiles = useSelector(selectProfiles);

  const dispacth: Dispatch<any> = useDispatch();

  const handleChangeProfile = (profile: ProfileInterface) => {
    dispacth(setCurrentProfile(profile));
    set("curr_profile", profile.id);
    setShow(false);
  };

  if (currentProfiles.length === 0 || !currentProfile) return;

  return (
    <div className={styles.chooseProfile}>
      <h4 className={styles.chooseProfile_title}>Виберіть профіль:</h4>
      <List>
        {currentProfiles.map((item) => (
          <ListItem key={item.id}>
            <ListItemButton
              sx={
                currentProfile.id === item.id ? { color: "primary.main" } : {}
              }
              onClick={() => handleChangeProfile(item)}
            >
              <ListItemIcon sx={{ color: "inherit" }}>
                {RoleIcon[item.role]}
              </ListItemIcon>
              <ListItemText>{item.title}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ChooseProfile;
