# Reactjs-dashboard

This project represents a dashboard app for user. It is including 5 pages and 5 components. below I will explain each page and component.

in each page we have two components that are fixed and never be change: Navbar and Sidebar.

## Navbar

In navbar which is sticky, we have title 'Admin' and in the right side of the navbar we have some icons from font-awesome which are 'notifications', 'languages', 'settings' and 'profile picture'.

## Sidebar

This component gives the user some useful access to reach different parts of the app. It includes four parts: 'Dashboard', 'Quick Menu', 'Notifications', 'Staff'. It must be mentioned that just three of them have nav links and navigates to other pages.
All the icons are used from font-awesome icons.
Sidebar has a flex value of 1 and the rest of the page has value of 4.

## Home Page

```bash
In the first page of the app we use different components:
    1. Featured Info
    2. Small Widget
    3. Large Widget
```

## Featured Info

This component is displayed on the top of the page. it consists of 3 divs which give some information about the statistics of Revanue, Sales and cost.

## Small Widget & Large Widget

In below of Featured Info component, we have two components which are small and large widgets.
Small Widget gives information about new joined member and next to each name, we have a button for viewing the profile and large Widget gives information about the latest transactions for each customer.

## User List Page

In this page we have a table that displays each user's id, status, transaction value. in each row, next to the transaction column we have two buttons:

1. Edit button: by clicking this button, user will navigate to other page (/users/:id). in this page user can check the current profile and edit his or her profile. also user can upload a new image.
2. Delete button: by clicking this button for each user, the user will be deleted from user list table.

## Add User Page

In this page each user can add a new user by filling and submitting the form.

## Products Page

The last page is product page. in this page we have a table with different products. There are 5 columns like id, name, image, stock, price and action. user acan delete each product by clicking the red button.
