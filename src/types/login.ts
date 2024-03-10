

export type LoginState = {
    password_visible: boolean;
    error: string;
    is_loading: boolean;
}

export type LoginProps = {
    setLoginState: (state: boolean) => void;
}
