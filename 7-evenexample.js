const EventEmitter = require('events');

// Create event emitter
const shop = new EventEmitter();

// Listener 1: When order is placed
shop.on('order', (orderId, amount) => {
  console.log(`🛒 Order received: #${orderId} - Amount: $${amount}`);
});

// Listener 2: Send email notification
shop.on('order', (orderId) => {
  console.log(`📧 Email sent: Order #${orderId} confirmed.`);
});

// Listener 3: Update inventory
shop.on('order', (orderId) => {
  console.log(`📦 Inventory updated for Order #${orderId}`);
});

// Emit the 'order' event
shop.emit('order', 101, 2500);
