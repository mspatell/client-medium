import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

// Create the main Hono app
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string;
	}
}>();

app.get('/', (c) => {
	return c.text('hello')
})

app.post('/api/v1/signup', async (c) => {
	const body = await c.req.json();
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate())

	try {
		await prisma.user.create({
			data: {
				email: body.email,
				password: body.password,
				name: body.name
			}
		})
		return c.text('Hello user')
	} catch (e) {
		c.status(411);
		return c.text("Invalid creds");
	}


})

app.post('/api/v1/signin', (c) => {
	return c.text('signin route')
})

app.get('/api/v1/blog/:id', (c) => {
	const id = c.req.param('id')
	console.log(id);
	return c.text('get blog route')
})

app.post('/api/v1/blog', (c) => {

	return c.text('blog route')
})

app.put('/api/v1/blog', (c) => {
	return c.text('update blog route')
})

export default app;
