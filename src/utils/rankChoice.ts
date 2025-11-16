export default function rankChoice(ballots: [string[]]): string | null {
  // All candidates that appear anywhere
  const allCandidates = new Set(ballots.flat());
  const active = new Set(allCandidates);

  function countFirstChoices() {
    const counts = Object.fromEntries([...active].map(c => [c, 0]));

    for (const ballot of ballots) {
      // Find this ballot's top-ranked *active* candidate
      const choice = ballot.find(candidate => active.has(candidate));
      if (choice !== undefined) {
        counts[choice]!++;
      }
    }

    return counts;
  }

  function countActiveBallots() {
    // Ballots that still have at least one active candidate
    let total = 0;
    for (const ballot of ballots) {
      if (ballot.some(candidate => active.has(candidate))) {
        total++;
      }
    }
    return total;
  }

  while (active.size > 1) {
    const counts = countFirstChoices();
    const totalActive = countActiveBallots();

    // Check for majority winner
    for (const [candidate, count] of Object.entries(counts)) {
      if (count > totalActive / 2) {
        return candidate; // winner
      }
    }

    // Find the lowest vote total among active candidates
    const minCount = Math.min(...Object.values(counts));

    // All candidates with the lowest count
    const losers = Object.entries(counts)
      .filter(([, count]) => count === minCount)
      .map(([candidate]) => candidate);

    // If everyone is tied, you can declare a tie (or break it however you want)
    if (losers.length === active.size) {
      return null; // full tie
    }

    // Eliminate all lowest candidates
    for (const loser of losers) {
      active.delete(loser);
    }
  }

  // Only one candidate left
  return [...active][0] ?? null;
}
