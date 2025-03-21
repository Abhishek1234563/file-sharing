# File Sharing App

A simple real-time file sharing application built with Node.js, Express, and Socket.IO. This project allows two or more users to join a room using a unique ID and share files (of any type) in real time.

## Overview

This application demonstrates a basic real-time file sharing system where users can:
- Join a room using a unique room ID.
- Select and send files to other users in the room.
- Receive files as download links on the client side.
- Get immediate feedback when a file is selected and when it is delivered to the room using Socket.IO acknowledgments.

The project consists of:
- **Server-side:** Built with Node.js, Express, and Socket.IO.
- **Client-side:** A plain HTML/CSS/JavaScript frontend served from the `public` directory.

## Features

- **Real-time communication:** Uses Socket.IO to instantly send and receive files.
- **Room-based sharing:** Users join a specific room (via a unique ID) to share files.
- **File acknowledgment:** Users receive an acknowledgment message when the file is delivered.
- **Support for any file type:** The application uses the FileReader API to encode files as base64 strings.

VISIT SITE NOW
https://file-sharing-b41o.onrender.com/
