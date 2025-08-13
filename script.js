const seatMap={
    rows:6,
    cols:10,
    seats:[]
}
//generate seats
for(let r=1;r<=seatMap.rows;r++){
    for(let c=1;c<=seatMap.cols;c++){
        seatMap.seats.push({
            id:`R${r}C${c}`,
            row:r,
            col:c,
            status:"available" // available, reserved or selected
        });
    }
}
const seatMapContainer=document.getElementById('seat-map');
// Render seats
function renderSeats(map) {
    seatMapContainer.innerHTML = '';
    seatMapContainer.style.display = 'grid';
    seatMapContainer.style.gridTemplateColumns = `repeat(${map.cols}, 40px)`;
    seatMapContainer.style.gap = '5px';
    seatMapContainer.style.justifyContent = 'center';

    map.seats.forEach(seat => {
        const seatDiv = document.createElement('div');
        seatDiv.classList.add('seat');
        seatDiv.textContent = seat.row + '-' + seat.col;
        seatDiv.id = seat.id;
        seatMapContainer.appendChild(seatDiv);
    });
}
function renderMobileAreas(map) {
    seatMapContainer.innerHTML = '';
    const areas = ['Front', 'Middle', 'Back'];
    areas.forEach(area => {
        const areaBtn = document.createElement('button');
        areaBtn.textContent = area;
        areaBtn.style.margin = '5px';
        areaBtn.style.width = '100px';
        areaBtn.addEventListener('click', () => renderAreaDetail(area));
        seatMapContainer.appendChild(areaBtn);
    });
}
function renderAreaDetail(area) {
    let areaSeats = seatMap.seats.filter(seat => {
        if (area === 'Front') return seat.row <= 2;
        if (area === 'Middle') return seat.row >= 3 && seat.row <= 4;
        if (area === 'Back') return seat.row >= 5;
    });
    renderSeats({ ...seatMap, seats: areaSeats, cols: 5 }); // smaller cols for mobile

    // Add back button
    const backBtn = document.createElement('button');
    backBtn.textContent = 'Back';
    backBtn.style.display = 'block';
    backBtn.style.margin = '10px auto';
    backBtn.addEventListener('click', () => renderMobileAreas(seatMap));
    seatMapContainer.appendChild(backBtn);
}
function renderLayout() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        renderMobileAreas(seatMap);
    } else {
        renderSeats(seatMap);
    }
}

window.addEventListener('resize', renderLayout);
renderLayout();
let selectedSeat = null;
seatMapContainer.addEventListener('click', e => {
    const seatDiv = e.target.closest('.seat');
    if (seatDiv && !seatDiv.classList.contains('reserved')) {
        // Remove previous selection
        if (selectedSeat) selectedSeat.classList.remove('selected');
        
        // Select new seat
        seatDiv.classList.add('selected');
        selectedSeat = seatDiv;
        
        // Enable reserve button
        reserveBtn.disabled = false;
    }
});
reserveBtn.addEventListener('click', () => {
    if (selectedSeat) {
        // Show alert or info
        alert(`You reserved seat: ${selectedSeat.id}`);

        // Mark seat as reserved
        selectedSeat.classList.remove('selected');
        selectedSeat.classList.add('reserved');

        // Update seat status in seatMap
        const seatObj = seatMap.seats.find(seat => seat.id === selectedSeat.id);
        if (seatObj) seatObj.status = 'reserved';

        // Reset selection
        selectedSeat = null;
        reserveBtn.disabled = true;
    }
});


