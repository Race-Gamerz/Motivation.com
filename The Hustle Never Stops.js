const grind = () => {
  const dreams = ["success", "wealth", "impact"];
  let hustle = setInterval(() => {
    if (dreams.length === 0) {
      clearInterval(hustle);
      console.log("🌟 LEGACY ACHIEVED!");
    } else {
      console.log(`⚡ ${dreams.shift().toUpperCase()} IN PROGRESS...`);
    }
  }, 1000);
};
grind();