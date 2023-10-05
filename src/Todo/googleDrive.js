import React, { useEffect } from "react";
import { google } from "googleapis";

const GoogleDrive = () => {
  // const credentials = {
  //   client_id: "536079493448-diopelkc5j1qpk0sb1nit76dme6s111e.apps.googleusercontent.com ",
  //   client_secret: "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",
  //   redirect_uris: ["http://localhost:3000/oauth2callback"],
  // };

  // const drive = google.drive({
  //   version: "v3",
  //   auth: new google.auth.OAuth2(
  //     credentials.client_id,
  //     credentials.client_secret,
  //     credentials.redirect_uris[0]
  //   ),
  // });

  // const authenticate = () => {
  //   const authUrl = drive.auth.generateAuthUrl({
  //     access_type: "offline",
  //     scope: ["https://www.googleapis.com/auth/drive.readonly"],
  //   });

  //   window.location.href = authUrl;
  // };

  // const handleOAuth2Callback = async (code) => {
  //   const { tokens } = await drive.auth.getToken(code);
  //   drive.auth.setCredentials(tokens);
  //   // Now you can use the `drive` instance to access Google Drive API
  // };

  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   const code = params.get("code");

  //   if (code) {
  //     handleOAuth2Callback(code);
  //   }
  // }, []);

  return (
    <div>
      {/* <button onClick={authenticate}>Authenticate with Google Drive</button> */}
    </div>
  );
};

export default GoogleDrive;
