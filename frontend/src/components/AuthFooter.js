// material-ui
/* eslint-disable */
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://bestonglobalfoods.com.au/" target="_blank" underline="hover">
            beston.com
        </Typography>
        <Typography variant="subtitle2" component={Link} href="https://github.com/lihongtao0406/beston_login_test" target="_blank" underline="hover">
            &copy; www.github_tao.repo
        </Typography>
    </Stack>
);

export default AuthFooter;
