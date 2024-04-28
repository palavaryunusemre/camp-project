import React from 'react'
import { Button, MenuItem } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <MenuItem>
                <Button primary onClick={signIn}>Giriş Yap</Button>
                <Button primary style={{marginLeft:"0.5em"}}>Kayıt Ol</Button>
            </MenuItem>

        </div>
    )
}
