import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Avatar,
    TextField,
    InputAdornment,
} from "@mui/material";
import {
    Search as SearchIcon,
    AccountCircle,
    MenuBook,
} from "@mui/icons-material";
import { useAuth } from "../contexts/AuthContext";

export function Navigation() {
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        logout();
        handleMenuClose();
        navigate("/");
    };

    const normalizeSearchQuery = (query: string) => {
        // 全角空白を半角空白に変換してtrim
        return query.replace(/　/g, " ").trim();
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const normalizedQuery = normalizeSearchQuery(searchQuery);
        if (normalizedQuery) {
            navigate(`/search?q=${encodeURIComponent(normalizedQuery)}`);
        }
    };

    const isMenuOpen = Boolean(anchorEl);

    return (
        <AppBar
            position="static"
            elevation={1}
            sx={{ bgcolor: "primary.main" }}
        >
            <Toolbar>
                {/* Logo */}
                <IconButton
                    edge="start"
                    color="inherit"
                    component={Link}
                    to="/"
                    sx={{ mr: 2 }}
                >
                    <MenuBook />
                </IconButton>
                <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{
                        textDecoration: "none",
                        color: "inherit",
                        fontWeight: "bold",
                        mr: 4,
                    }}
                >
                    bireco
                </Typography>

                {/* Search Bar - only show on larger screens */}
                <Box
                    component="form"
                    onSubmit={handleSearch}
                    sx={{
                        flexGrow: 1,
                        maxWidth: 400,
                        mr: 4,
                        display: { xs: "none", md: "block" },
                    }}
                >
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="本や著者名で検索..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "rgba(255, 255, 255, 0.15)",
                                "& fieldset": {
                                    borderColor: "rgba(255, 255, 255, 0.3)",
                                },
                                "&:hover fieldset": {
                                    borderColor: "rgba(255, 255, 255, 0.5)",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "white",
                                },
                                "& input": { color: "white" },
                                "& input::placeholder": {
                                    color: "rgba(255, 255, 255, 0.7)",
                                },
                            },
                        }}
                    />
                </Box>

                {/* Spacer to push auth buttons to the right */}
                <Box
                    sx={{ flexGrow: 1, display: { xs: "block", md: "none" } }}
                />

                {/* Auth Section */}
                {isAuthenticated ? (
                    <Box display="flex" alignItems="center" gap={2}>
                        <Box display="flex" alignItems="center" gap={1}>
                            <Button
                                size="large"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                                startIcon={
                                    user?.avatar_url ? (
                                        <Avatar
                                            src={user.avatar_url}
                                            sx={{ width: 32, height: 32 }}
                                        />
                                    ) : (
                                        <AccountCircle />
                                    )
                                }
                            >
                                <Typography
                                    variant="body2"
                                    sx={{
                                        display: { xs: "none", sm: "inline" },
                                    }}
                                >
                                    {user?.username}
                                </Typography>
                            </Button>
                        </Box>

                        <Menu
                            anchorEl={anchorEl}
                            open={isMenuOpen}
                            onClose={handleMenuClose}
                            onClick={handleMenuClose}
                            transformOrigin={{
                                horizontal: "right",
                                vertical: "top",
                            }}
                            anchorOrigin={{
                                horizontal: "right",
                                vertical: "bottom",
                            }}
                        >
                            <MenuItem onClick={() => navigate("/profile")}>
                                プロフィール
                            </MenuItem>
                            <MenuItem onClick={handleLogout}>
                                ログアウト
                            </MenuItem>
                        </Menu>
                    </Box>
                ) : (
                    <Box display="flex" alignItems="center" gap={1}>
                        <Button color="inherit" component={Link} to="/login">
                            ログイン
                        </Button>
                        <Button
                            color="inherit"
                            variant="outlined"
                            component={Link}
                            to="/register"
                        >
                            新規登録
                        </Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}
