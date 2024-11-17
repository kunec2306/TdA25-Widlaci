<template>
    <div class="table-container">
      <h1>Piškvorky</h1>
      <table>
        <tbody>
          <tr v-for="(row, rowIndex) in board" :key="rowIndex" id="radky">
            <td
              v-for="(cell, colIndex) in row"
              :key="colIndex"
              @click="makeMove(rowIndex, colIndex)"
              class="cell"
            >
              {{ cell }}
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="winner" class="winner-message">
        Vítěz: {{ winner }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        board: Array.from({ length: 15 }, () => Array(15).fill('')),
        currentPlayer: 'X',
        winner: null
      };
    },
    methods: {
      makeMove(row, col) {
        // Zkontroluj, jestli je tah možný (buňka je prázdná a není výherce)
        if (this.board[row][col] === '' && !this.winner) {
          // Proveď tah aktuálního hráče
          this.board[row][col] = this.currentPlayer;
  
          // Zkontroluj výhru po tahu
          if (this.checkWin(row, col)) {
            this.winner = this.currentPlayer;
          } else {
            // Přepni na druhého hráče
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
          }
        }
      },
      checkWin(row, col) {
        return (
          this.checkDirection(row, col, 1, 0) || // Horizontálně
          this.checkDirection(row, col, 0, 1) || // Vertikálně
          this.checkDirection(row, col, 1, 1) || // Diagonálně \
          this.checkDirection(row, col, 1, -1)   // Diagonálně /
        );
      },
      checkDirection(row, col, rowDelta, colDelta) {
        let count = 1;
        let player = this.board[row][col];
  
        // Kontrola směrem dopředu
        count += this.countInDirection(row, col, rowDelta, colDelta, player);
        // Kontrola směrem dozadu
        count += this.countInDirection(row, col, -rowDelta, -colDelta, player);
  
        return count >= 5;
      },
      countInDirection(row, col, rowDelta, colDelta, player) {
        let count = 0;
        let r = row + rowDelta;
        let c = col + colDelta;
  
        while (
          r >= 0 &&
          r < 15 &&
          c >= 0 &&
          c < 15 &&
          this.board[r][c] === player
        ) {
          count++;
          r += rowDelta;
          c += colDelta;
        }
  
        return count;
      }
    }
  };
  </script>
