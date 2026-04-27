// Badala ya app.listen... tumia hii:
module.exports = app;

// Kama unataka iweze kuwaka kote kote (Local na Vercel):
if (process.env.NODE_ENV !== 'production') {
    app.listen(3000, () => console.log('Server inawaka local!'));
}
