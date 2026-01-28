export function calculateTotalScore(history) {
  /**
 * Gère les scores totaux et l'historique
 */

/**
 * Calcule le score total de tous les joueurs
 */
export function calculateTotalScore(players) {
  const totals = {};
  
  for (const player of players) {
    totals[player.name] = player.score;
  }
  
  return totals;
}

/**
 * Vérifie si un joueur a atteint ou dépassé le score limite
 */
export function hasReachedScoreLimit(players, limit = 200) {
  return players.some(player => player.score >= limit);
}

/**
 * Trouve le gagnant (score le plus bas)
 */
export function findWinner(players) {
  return players.reduce((winner, player) => 
    player.score < winner.score ? player : winner
  );
}

/**
 * Affiche le classement
 */
export function displayFinalRanking(players) {
  console.log('\n' + '='.repeat(50));
  console.log('🏆 CLASSEMENT FINAL');
  console.log('='.repeat(50));

  const sortedPlayers = [...players].sort((a, b) => a.score - b.score);

  sortedPlayers.forEach((player, index) => {
    const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '  ';
    console.log(`${medal} ${(index + 1)}.`.padEnd(6) + `${player.name.padEnd(20)} ${player.score} points`);
  });

  console.log('='.repeat(50));
  console.log(`\n🎉 ${sortedPlayers[0].name} remporte la partie !`);
}

/**
 * Crée un résumé de l'historique
 */
export function createHistorySummary(players, rounds) {
  return {
    date: new Date().toISOString(),
    rounds: rounds,
    finalScores: calculateTotalScore(players),
    winner: findWinner(players).name
  };
}
}