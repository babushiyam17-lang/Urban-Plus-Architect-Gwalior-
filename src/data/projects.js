const ASSET_BASE = import.meta.env.BASE_URL + 'assets/'

export const projects = [
  { id:'pixzen', title:'Pixzen', category:'Digital Experience', meta:'2026', image:`${ASSET_BASE}pixzen.svg`, summary:'A high-energy visual system built around clarity, motion and bold digital storytelling.', details:'A premium digital experience study focused on strong visual hierarchy, motion, atmosphere and memorable interaction.'},
  { id:'wander', title:'Wander', category:'Hospitality', meta:'2026', image:`${ASSET_BASE}wander.svg`, summary:'An immersive spatial identity balancing warmth, discovery and refined detail.', details:'A hospitality-led visual direction balancing discovery, warmth, movement and a strong editorial identity.'},
  { id:'agentify', title:'Agentify', category:'Future Systems', meta:'2026', image:`${ASSET_BASE}agentify.svg`, summary:'A forward-looking interface language where intelligence meets human-centered design.', details:'A future-facing interface concept combining artificial intelligence, clarity, trust and human-centered digital design.'},
  { id:'future', title:'Future', category:'Experimental', meta:'2026', image:`${ASSET_BASE}future.svg`, summary:'A cinematic exploration of emerging technology, atmosphere and interaction.', details:'An experimental visual system exploring emerging technology, spatial computing, cinematic atmosphere and interaction.'},
  { id:'genova', title:'Genova', category:'Architecture', meta:'2026', image:`${ASSET_BASE}genova.svg`, summary:'A precise, contemporary composition shaped by material, light and movement.', details:'A contemporary architectural presentation exploring material, light, science-inspired form and refined visual storytelling.'}
]

export const services = [
  ['Architecture','Site-responsive homes and spatial concepts developed from climate, proportion, and everyday rituals.'],
  ['Interior Design','Material-led interiors with custom details, calm palettes, lighting strategy, and lived-in refinement.'],
  ['3D Visualization','Cinematic images and walkthrough-ready compositions for confident design decisions and presentations.'],
  ['Consultation','Early-stage guidance for plots, renovations, space planning, feasibility, and design direction.']
]
