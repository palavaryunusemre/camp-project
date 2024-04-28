import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, Image, MenuItem } from 'semantic-ui-react'


export default function Signed({signOut}) {
    return (
        <div>
            <MenuItem>
                <Image avatar spaced="right" src="https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png"></Image>
                <Dropdown pointing="top left" text="Yunus Emre">
                    <DropdownMenu>
                        <DropdownItem text="Bilgilerim" icon="info" />
                        <DropdownItem onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                    </DropdownMenu>
                </Dropdown>
            </MenuItem>
        </div>
    )
}
