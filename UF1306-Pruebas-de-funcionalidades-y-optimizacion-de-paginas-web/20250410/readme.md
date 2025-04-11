CONFIGURACIÓN DE MONGODB ATLAS

1. Accede a https://www.mongodb.com/cloud/atlas y crea un cluster gratuito.
2. Crea una base de datos llamada 'biblioteca' y una colección inicial.
3. En la sección 'Database Access', añade un usuario y contraseña para acceder.
4. En 'Network Access', añade la IP '0.0.0.0/0' para acceso universal.
5. Copia la cadena de conexión (MongoDB URI) y reemplaza en tu archivo .env (elegir mongose):
   
MONGO_URI=mongodb+srv://usuario:contraseña@cluster0.zq1il.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

