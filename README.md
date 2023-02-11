## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation

## Deploy on VPS
cd /var/www/ForMenu
sudo git pull
sudo npm install
sudo npm run build

sudo pm2 list
sudo pm2 restart 0
( or the number of the process corresponding to the app (replace 0 for the correct id) )
sudo pm2 start npm --name "ForMenu" -- start

## Deploy on CapRover
~ just push the new image to andycinquin/siteformenu-prod  
~ restart the container on CapRover
