export default process.env.NODE_ENV === "production" ? { 
    googleClientID : "209296344566-fglo7jedn2nqjmb8me6o0kg5jel4qjan.apps.googleusercontent.com",
                googleClientSecret : "V4GhGJcLXCvtgSqdiOCR93Zm",
                mongoURI : process.env.MONGO,
                cookieKey : "hsdghsdghsd",
                FACEBOOK_APP_ID : "2183655625275997",
                FACEBOOK_APP_SECRET : "ba716e187750acf9eddaf74ba9fc37dc"} : { 
                    googleClientID : "209296344566-fglo7jedn2nqjmb8me6o0kg5jel4qjan.apps.googleusercontent.com",
                                googleClientSecret : "V4GhGJcLXCvtgSqdiOCR93Zm",
                                mongoURI : process.env.MONGO,
                                cookieKey : "hsdghsdghsd",
                                FACEBOOK_APP_ID : "2183655625275997",
                                FACEBOOK_APP_SECRET : "ba716e187750acf9eddaf74ba9fc37dc"}

