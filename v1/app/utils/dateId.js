export default ( date ) => date.toLocaleDateString( process.env.LANG || 'en-US', { year: 'numeric' } )+date.toLocaleDateString( process.env.LANG || 'en-US', { month: '2-digit' } )+date.toLocaleDateString( process.env.LANG || 'en-US', { day: '2-digit' } )