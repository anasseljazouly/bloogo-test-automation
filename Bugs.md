# BUGS

## 🐞 Bug Report #1: Non-Image Files Can Be Uploaded as Blog Thumbnails

- **Severity**: Medium
- **Priority**: High
- **Status**: Open

**Steps to Reproduce**:

1. Log in as a valid user.
2. Go to `/blog/new`.
3. Click “Upload Thumbnail”.
4. Select a `.txt` or `.pdf` file.

**Expected Behavior**:  
Only image files should be accepted. Non-image files should be blocked.

**Actual Behavior**:  
Any file type is accepted and uploaded.

**Suggested Fix**:  
Implement MIME type validation on both client and server.

---

## 🐞 Bug Report #2: Blog Can Be Submitted Without a Thumbnail

- **Severity**: Medium
- **Priority**: Medium
- **Status**: Open

**Steps to Reproduce**:

1. Log in and go to `/blog/new`.
2. Enter a title and some content.
3. Do not upload a thumbnail.
4. Click “Publish”.

**Expected Behavior**:  
Form should prevent submission and show an error if thumbnail is missing.

**Actual Behavior**:  
The blog is published without a thumbnail, leading to a blank image area on the homepage.

**Suggested Fix**:  
Add `required` validation for the thumbnail field during blog creation.

---

## 🐞 Bug Report #3: Uploaded Thumbnail Cannot Be Removed

- **Severity**: Low
- **Priority**: Medium
- **Status**: Open

**Steps to Reproduce**:

1. Log in and go to `/blog/new`.
2. Upload a thumbnail image.
3. Attempt to remove or replace the uploaded image.

**Expected Behavior**:  
There should be a visible option to remove the uploaded image or replace it with another.

**Actual Behavior**:  
Once uploaded, the image cannot be cleared or removed. The user must refresh the page to undo the action.

**Suggested Fix**:  
Add a "Remove" or "Change Thumbnail" button to allow undoing the upload without refreshing the page.

---
