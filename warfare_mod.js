// ============================
// WARFARE MASTER MOD
// ============================

// ---------- INDRA SOLDIER ----------
elements.india_soldier = {
    color: "#FF9933",
    category: "warfare",
    state: "solid",

    tick: function(pixel) {

        if (Math.random() < 0.5) {
            tryMove(pixel, pixel.x + (Math.random() < 0.5 ? -1 : 1), pixel.y);
        }

        // attack enemy soldier
        for (let dx = -2; dx <= 2; dx++) {
            for (let dy = -2; dy <= 2; dy++) {

                let x = pixel.x + dx;
                let y = pixel.y + dy;

                if (pixelMap[x] && pixelMap[x][y]) {

                    if (pixelMap[x][y].element === "enemy_soldier") {
                        deletePixel(x, y);
                        createPixel("fire", x, y);
                    }
                }
            }
        }
    }
};

// ---------- ENEMY SOLDIER ----------
elements.enemy_soldier = {
    color: "#990000",
    category: "warfare",
    state: "solid",

    tick: function(pixel) {

        if (Math.random() < 0.5) {
            tryMove(pixel, pixel.x + (Math.random() < 0.5 ? -1 : 1), pixel.y);
        }

        for (let dx = -2; dx <= 2; dx++) {
            for (let dy = -2; dy <= 2; dy++) {

                let x = pixel.x + dx;
                let y = pixel.y + dy;

                if (pixelMap[x] && pixelMap[x][y]) {

                    if (pixelMap[x][y].element === "india_soldier") {
                        deletePixel(x, y);
                        createPixel("fire", x, y);
                    }
                }
            }
        }
    }
};

// ---------- TANK ----------
elements.tank = {
    color: "#556B2F",
    category: "warfare",
    state: "solid",

    tick: function(pixel) {

        if (Math.random() < 0.2) {
            tryMove(pixel, pixel.x + 1, pixel.y);
        }

        if (Math.random() < 0.05) {
            explodeAt(pixel.x + 2, pixel.y, 4, ["fire", "smoke"]);
        }
    }
};

// ---------- MISSILE ----------
elements.missile = {
    color: "#888888",
    category: "warfare",
    state: "solid",

    tick: function(pixel) {

        tryMove(pixel, pixel.x, pixel.y - 1);

        if (Math.random() < 0.03 || pixel.y < 5) {
            explodeAt(pixel.x, pixel.y, 8, ["fire", "smoke", "plasma"]);
            deletePixel(pixel.x, pixel.y);
        }
    }
};

// ---------- BOMBER PLANE ----------
elements.bomber_plane = {
    color: "#777777",
    category: "warfare",
    state: "solid",

    tick: function(pixel) {

        tryMove(pixel, pixel.x + 1, pixel.y);

        if (Math.random() < 0.08) {
            createPixel("missile", pixel.x, pixel.y + 1);
        }
    }
};

// ---------- TSAR BOMB ----------
elements.tsar_bomb = {
    color: "#333333",
    category: "warfare",
    state: "solid",

    tick: function(pixel) {

        if (pixel.temp > 120 || Math.random() < 0.001) {

            explodeAt(pixel.x, pixel.y, 60, [
                "fire",
                "fire",
                "smoke",
                "smoke",
                "plasma",
                "radiation"
            ]);

            // extra destruction wave
            for (let dx = -4; dx <= 4; dx++) {
                for (let dy = -4; dy <= 4; dy++) {

                    let x = pixel.x + dx;
                    let y = pixel.y + dy;

                    if (pixelMap[x] && pixelMap[x][y] && Math.random() < 0.5) {
                        deletePixel(x, y);
                    }
                }
            }

            deletePixel(pixel.x, pixel.y);
        }
    }
};
