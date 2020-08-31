<?php

namespace App\Http\Controllers;

use PDF;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\transaksi_penjualan;
use App\detail_pemesanan;

class FilesController extends Controller
{
    /**
     * Generate receipt of procurement.
     *
     * @param int $id
     * @return void
     */


    /**
     * Generate receipt of Transaction
     *
      * @param string $id
      * @return void
     */
    // public function generateSPKPdf($id)
    // {
    //     try {
    //         $transaction = Transaction::find($id);
    //         // $users = User::select('name')->distinct()->get();
    //         // $motor = $transaction->with('detail_transaction_service')->motorcyclecustomer->select('plate_number')->distinct()->get();
    //         // $motor = $transaction->detail_transaction_service()->with('motorcyclecustomer')->get();
    //         // $motor = $transaction->detail_transaction_service()->get();

    //         // return $motor;
    //         // return $total_sparepart;
    //         // return $transaction->employee;
    //         $service_details = $transaction->detail_transaction_service
    //         ->map(function ($item) {
    //             return $item;
    //         });
    //         $sparepart_details = $transaction->detail_transaction_sparepart
    //         ->map(function ($item) {
    //             return $item;
    //         });

    //         if($transaction->type_transaction == 'Sparepart')
    //         {
    //             // $mechanics = $sparepart_details->reduce(function ($carry, $item) {
    //             //     return $item->mechanic;
    //             // }, []);
    //             $mechanics = $transaction->detail_transaction_sparepart()->first()->mechanic->name_employee;

    //             $motor = $transaction->detail_transaction_sparepart()->first()->motorcyclecustomer;
    //         }
    //         else{
    //             // $mechanics = $service_details->reduce(function ($carry, $item) {
    //             //     return $item->mechanic;
    //             // }, []);
    //             $mechanics = $transaction->detail_transaction_service()->first()->mechanic->name_employee;

    //             $motor = $transaction->detail_transaction_service()->first()->motorcyclecustomer;

    //         }
            
    //         // return $motor;

    //         $pdf = PDF::loadView('pdf.spk', compact('transaction','motor','mechanics'))->setPaper('a4', 'portrait');

    //         return $pdf->stream();
    //         // return $pdf->download($transaction->transaction_code . '.pdf');
    //     } catch (\Exception $e) {
    //         return response()->json($e->getMessage());
    //     }
    // }
    
    public function generatePemesananPdf($id)
    {
        try {
            $detail_pemesanan = detail_pemesanan::find($id);
            $no = 1;
            $pdf = PDF::loadView('cetak_surat_pemesanan', compact('detail_pemesanan','no'))->setPaper('a4', 'portrait');

           return $pdf->stream();
           // return $pdf->download($transaction->transaction_code . '.pdf');
       } catch (\Exception $e) {
           return response()->json($e->getMessage());
       }
    }

    public function generatePerintahKerjaPdf($id)
    {
        try {
            $transaksi_penjualan = transaksi_penjualan::find($id);

            $service_details = $transaksi_penjualan->detail_penjualan_jasa
            ->map(function ($item) {
                return $item;
        });

        $sparepart_details = $transaksi_penjualan->detail_penjualan_sparepart
            ->map(function ($item){
                return $item;
        });

        $mechanics=[];
        $sparepartmotorcycles=[];
        $servicemotorcycles=[];
        $motorcycles=[];
        $temp = 0;

        foreach($service_details as $detail)
        {
            if($mechanics!=NULL)
            {
                foreach($mechanics as $mechanic)
                {
                    if($mechanic!=$detail->montir_onduty->pegawai->NAMA_PEGAWAI)
                    {
                        $temp = 1;
                    }
                    else{
                        $temp = 0;
                    }
                }
                if($temp ==1)
                {
                    array_push($mechanics,$detail->montir_onduty->pegawai->NAMA_PEGAWAI);
                }
                

            }
            else{
                array_push($mechanics,$detail->montir_onduty->pegawai->NAMA_PEGAWAI);
            }
        }

        ///
        foreach($service_details as $detail)
           {
               if($servicemotorcycles!=NULL)
               {
                   foreach($servicemotorcycles as $motorcycle)
                   {
                       if($motorcycle!=$detail->montir_onduty->kendaraan_pelanggan->motor->MERK_MOTOR.' '.$detail->montir_onduty->kendaraan_pelanggan->motor->TIPE_MOTOR.''.$detail->montir_onduty->kendaraan_pelanggan->NO_PLAT)
                       {
                           $temp = 1;
                       }
                       else{
                           $temp = 0;
                       }   
                   }
                   if($temp ==1)
                   {
                       array_push($servicemotorcycles,$detail->montir_onduty->kendaraan_pelanggan->motor->MERK_MOTOR.' '.$detail->montir_onduty->kendaraan_pelanggan->motor->TIPE_MOTOR.''.$detail->montir_onduty->kendaraan_pelanggan->NO_PLAT);
                   }   
               }
               else{
                   array_push($servicemotorcycles,$detail->montir_onduty->kendaraan_pelanggan->motor->MERK_MOTOR.' '.$detail->montir_onduty->kendaraan_pelanggan->motor->TIPE_MOTOR.''.$detail->montir_onduty->kendaraan_pelanggan->NO_PLAT);
               }
           }
  
        //

           $pdf = PDF::loadView('cetak_surat_perintah_kerja', compact('transaksi_penjualan','mechanics','servicemotorcycles'))->setPaper('a4', 'portrait');

           return $pdf->stream();
           // return $pdf->download($transaction->transaction_code . '.pdf');
       } catch (\Exception $e) {
           return response()->json($e->getMessage());
       }
   }

    public function generateNotaPdf($id)
    {
         try {
             $transaksi_penjualan = transaksi_penjualan::find($id);

             $service_details = $transaksi_penjualan->detail_penjualan_jasa
             ->map(function ($item) {
                 return $item;
         });

         $sparepart_details = $transaksi_penjualan->detail_penjualan_sparepart
             ->map(function ($item){
                 return $item;
         });

         $mechanics=[];
         $sparepartmotorcycles=[];
         $servicemotorcycles=[];
         $motorcycles=[];
         $temp = 0;

         foreach($service_details as $detail)
         {
             if($mechanics!=NULL)
             {
                 foreach($mechanics as $mechanic)
                 {
                     if($mechanic!=$detail->montir_onduty->pegawai->NAMA_PEGAWAI)
                     {
                         $temp = 1;
                     }
                     else{
                         $temp = 0;
                     }
                 }
                 if($temp ==1)
                 {
                     array_push($mechanics,$detail->montir_onduty->pegawai->NAMA_PEGAWAI);
                 }
                 

             }
             else{
                 array_push($mechanics,$detail->montir_onduty->pegawai->NAMA_PEGAWAI);
             }
         }

         ///
         foreach($service_details as $detail)
            {
                if($servicemotorcycles!=NULL)
                {
                    foreach($servicemotorcycles as $motorcycle)
                    {
                        if($motorcycle!=$detail->montir_onduty->kendaraan_pelanggan->motor->MERK_MOTOR.' '.$detail->montir_onduty->kendaraan_pelanggan->motor->TIPE_MOTOR.''.$detail->montir_onduty->kendaraan_pelanggan->NO_PLAT)
                        {
                            $temp = 1;
                        }
                        else{
                            $temp = 0;
                        }   
                    }
                    if($temp ==1)
                    {
                        array_push($servicemotorcycles,$detail->montir_onduty->kendaraan_pelanggan->motor->MERK_MOTOR.' '.$detail->montir_onduty->kendaraan_pelanggan->motor->TIPE_MOTOR.''.$detail->montir_onduty->kendaraan_pelanggan->NO_PLAT);
                    }   
                }
                else{
                    array_push($servicemotorcycles,$detail->montir_onduty->kendaraan_pelanggan->motor->MERK_MOTOR.' '.$detail->montir_onduty->kendaraan_pelanggan->motor->TIPE_MOTOR.''.$detail->montir_onduty->kendaraan_pelanggan->NO_PLAT);
                }
            }
   
         //

            $pdf = PDF::loadView('cetak_nota_lunas', compact('transaksi_penjualan','mechanics','servicemotorcycles'))->setPaper('a4', 'portrait');

            return $pdf->stream();
            // return $pdf->download($transaction->transaction_code . '.pdf');
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    public function showProcurement($id)
    {
        $procurement = SparepartProcurement::find($id);
        $no = 1;

        return view('pdf.procurement', compact('procurement', 'no'));
    }

    public function showWorkOrder($id)
    {
        $transaction = Transaction::find($id);

        return view('pdf.workOrder', compact('transaction'));
    }

    public function pendapatanTahunan() {
        $data = DB::select(
            'SELECT
            YEAR(TGL_TRANSAKSI) "tahun",
            NAMA_CABANG "cabang",
            SUBTOTAL "sub",
            SUM(GRANDTOTAL) "total",
            ID_JASA "jasa",
            ID_SPAREPARTS "SPAREPART"
            FROM
                transaksi_penjualan  
            LEFT JOIN detail_penjualan_jasa USING(ID_TRANSAKSI)
            LEFT JOIN detail_penjualan_sparepart USING(ID_TRANSAKSI)
            JOIN branches USING(ID_CABANG)
            WHERE
               STATUS_TRANSAKSI = "Paid"
            GROUP BY
                NAMA_CABANG,
                YEAR(TGL_TRANSAKSI),
                SUBTOTAL,
                ID_JASA,
                ID_SPAREPARTS
            ORDER BY tahun, cabang ASC,sub,jasa,SPAREPART', [1]);

            return response()->json($data, 200);
    }

    public function sparepartTerlaris($tahun) {
        $data =DB::select(
            'SELECT
            bulan,
            nama,
            tipe,
            MAX(total) "total"
            FROM
                (
                SELECT
                    MONTH(TGL_TRANSAKSI) AS bulan,
                    NAMA_SPAREPART AS nama,
                    TIPE as tipe,
                    SUM(JUMLAH_SPAREPART) AS total
                FROM
                    detail_penjualan
                LEFT JOIN detail_penjualan_sparepart USING(ID_TRANSAKSI)
                join sparepart using(ID_SPAREPARTS)
                WHERE
                    YEAR(TGL_TRANSAKSI) = :tahun AND STATUS_TRANSAKSI = "Paid"
                GROUP BY
                    ID_SPAREPARTS,
                    bulan
                ORDER BY
                    total
                DESC
            ) q
            GROUP BY
                bulan
            ORDER BY
                bulan ASC',
                ['tahun' => $tahun]);

        return response()->json($data, 200);
    }



    public function pendapatanBulanan($tahun) {
        $data = DB::select(
            'SELECT
            bulan,
            tahun,
            SUM(service) "service",
            SUM(sparepart) "sparepart",
            SUM(service) + SUM(sparepart) "total"
            FROM
                (
                SELECT
                    MONTH(TGL_TRANSAKSI) "bulan",
                    YEAR(TGL_TRANSAKSI) "tahun",
                    SUBTOTAL_JASA "service",
                    0 "sparepart"
                FROM
                    transaksi_penjualan
                LEFT JOIN detail_penjualan_jasa USING(ID_TRANSAKSI)
                WHERE
                    STATUS_TRANSAKSI = "Paid"
                UNION ALL
                SELECT
                    MONTH(TGL_TRANSAKSI) "bulan",
                    YEAR(TGL_TRANSAKSI) "tahun",
                    0 "service",
                    subtotal_sparepart "sparepart"
                FROM
                transaksi_penjualan
                LEFT JOIN detail_penjualan_sparepart USING(ID_TRANSAKSI)
                WHERE
                    STATUS_TRANSAKSI = "Paid"
            ) a
            GROUP BY
                bulan,
                tahun
            HAVING
                tahun = :tahun', ['tahun' => $tahun]);

        return response()->json($data, 200);
    }


    
    public function TransactionperYear($year)
    {
        // $report = DB::select("SELECT * FROM transactions");
        $report = DB::select("SELECT MONTHNAME(STR_TO_DATE((m.bulan), '%m')) AS Bulan, COALESCE(SUM(d.subtotal_transaction_sparepart),0) AS Sparepart,COALESCE(SUM(e.subtotal_transaction_service),0) AS Service,COALESCE(SUM(d.subtotal_transaction_sparepart),0)+COALESCE(SUM(e.subtotal_transaction_service),0)  AS Total FROM (SELECT '01' AS
        bulan
        UNION SELECT '02' AS
        bulan
        UNION SELECT '03' AS
        bulan
        UNION SELECT '04' AS
        bulan
        UNION SELECT '05' AS
        bulan
        UNION SELECT '06' AS
        bulan
        UNION SELECT '07'AS
        bulan
        UNION SELECT '08'AS
        bulan
        UNION SELECT '09' AS
        bulan
        UNION SELECT '10' AS
        bulan
        UNION SELECT '11' AS
        bulan
        UNION SELECT '12' AS
        bulan
        )AS m LEFT JOIN (SELECT * FROM transactions WHERE YEAR(date_transaction)=$year AND status_paid='Paid') p ON MONTHNAME(p.date_transaction) = MONTHNAME(STR_TO_DATE((m.bulan), '%m')) LEFT JOIN detail_transaction_spareparts d ON p.id_transaction=d.id_transaction
        LEFT JOIN detail_transaction_services e ON p.id_transaction=e.id_transaction

        GROUP BY YEAR(p.date_transaction),m.bulan
        ORDER by m.bulan");

        $date = Carbon::now()->format('d F Y');
        $no = 1;
        // return $report;
        $pdf = PDF::loadView('pdf.reportprofitpermonth', compact('report','year','date','no'))->setPaper('a4', 'portrait');

        return $pdf->stream();

    }

    public function SpendperYear($year)
    {
        $report = DB::select("SELECT MONTHNAME(STR_TO_DATE((m.bulan), '%m')) AS Bulan,  COALESCE(SUM(d.subtotal_detail_procurement),0) AS Total FROM (SELECT '01' AS
        bulan
        UNION SELECT '02' AS
        bulan
        UNION SELECT '03' AS
        bulan
        UNION SELECT '04' AS
        bulan
        UNION SELECT '05' AS
        bulan
        UNION SELECT '06' AS
        bulan
        UNION SELECT '07'AS
        bulan
        UNION SELECT '08'AS
        bulan
        UNION SELECT '09' AS
        bulan
        UNION SELECT '10' AS
        bulan
        UNION SELECT '11' AS
        bulan
        UNION SELECT '12' AS
        bulan
        )AS m LEFT JOIN (SELECT * FROM sparepart_procurements WHERE YEAR(date_procurement)=$year)as p ON MONTHNAME(p.date_procurement) = MONTHNAME(STR_TO_DATE((m.bulan), '%m')) LEFT JOIN
        detail_sparepart_procurements d ON d.id_procurement = p.id_procurement
      
        GROUP BY YEAR(p.date_procurement),m.bulan
        ORDER by m.bulan");

        // return ($report);
        $date = Carbon::now()->format('d F Y');
        $no = 1;
        // return $report;
        $pdf = PDF::loadView('pdf.reportexpense', compact('report','year','date','no'))->setPaper('a4', 'portrait');

        return $pdf->stream();
    }

    public function TransactionbyBranch()
    {
        $report = DB::select("SELECT YEAR(c.transaction_date) AS Tahun, D.branch_name AS Cabang, SUM(C.transaction_total) AS Total FROM employee_onduties a join employees b on b.id_employee=a.id_employee JOIN transactions c on c.id_transaction=a.id_transaction
        join branches d on d.id_branch=b.id_branch
        WHERE b.id_role = 1 or b.id_role = 2
        GROUP BY YEAR(c.transaction_date),d.branch_name");
        return ($report);
    }

    public function TopSellSparepart()
    {
        $report = DB::select("SELECT MONTHNAME(STR_TO_DATE((m.bulan), '%m')) as Bulan, Coalesce((select s.name_sparepart from detail_transaction_spareparts t inner join spareparts s on t.id_sparepart = s.id_sparepart where MONTHNAME(t.created_at) = MONTHNAME(STR_TO_DATE((m.bulan), '%m')) group by t.id_sparepart order by sum(t.amount_transaction_sparepart) DESC LIMIT 1),'-') AS NamaBarang, Coalesce((select tp.name_sparepart_type from detail_transaction_spareparts t inner join spareparts s on t.id_sparepart = s.id_sparepart inner join sparepart_types tp on s.id_sparepart_type = tp.id_sparepart_type where MONTHNAME(t.created_at) = MONTHNAME(STR_TO_DATE((m.bulan), '%m')) group by t.id_sparepart order by sum(t.amount_transaction_sparepart) DESC LIMIT 1),'-') AS TipeBarang, Coalesce((select sum(amount_transaction_sparepart) from detail_transaction_spareparts where MONTHNAME(created_at) = MONTHNAME(STR_TO_DATE((m.bulan), '%m')) group by id_sparepart order by sum(amount_transaction_sparepart) DESC LIMIT 1),'-') AS JumlahPenjualan
        FROM(
               SELECT '01' AS
               bulan
               UNION SELECT '02' AS
               bulan
               UNION SELECT '03' AS
               bulan
               UNION SELECT '04' AS
               bulan
               UNION SELECT '05' AS
               bulan
               UNION SELECT '06' AS
               bulan
               UNION SELECT '07'AS
               bulan
               UNION SELECT '08'AS
               bulan
               UNION SELECT '09' AS
               bulan
               UNION SELECT '10' AS
               bulan
               UNION SELECT '11' AS
               bulan
               UNION SELECT '12' AS
               bulan
        ) AS m");
        // return ($report);
        $date = Carbon::now()->format('d F Y');
        $no = 1;
        $year =2018;
       
        $pdf = PDF::loadView('pdf.sparepartTopSell', compact('report','year','date','no'))->setPaper('a4', 'portrait');

        return $pdf->stream();

    }

    public function ServiceSelling($year,$month)
    {
        $report = DB::select("SELECT motorcycle_brands.name_motorcycle_brand, motorcycle_types.name_motorcycle_type, services.name_service, sum(detail_transaction_services.amount_transaction_service)as jumlah_jasa
        FROM detail_transaction_services
        LEFT JOIN motorcycle_customers on detail_transaction_services.id_motorcycle = motorcycle_customers.id_motorcycle
        JOIN motorcycle_types ON motorcycle_customers.id_motorcycle_type = motorcycle_types.id_motorcycle_type
        JOIN motorcycle_brands ON motorcycle_types.id_motorcycle_brand = motorcycle_brands.id_motorcycle_brand
        LEFT JOIN services ON detail_transaction_services.id_service = services.id_service
        LEFT JOIN transactions ON detail_transaction_services.id_transaction = transactions.id_transaction
        WHERE YEAR(transactions.date_transaction) = $year
        AND Month(transactions.date_transaction) = $month
        AND transactions.status_paid = 'Paid'
        GROUP BY detail_transaction_services.id_service, motorcycle_customers.id_motorcycle
        ORDER BY motorcycle_customers.id_motorcycle");
        // return response()->json($report, 200, [], JSON_NUMERIC_CHECK);
        $date = Carbon::now()->format('d F Y');
        $no = 1;
        // $year =2018;
       
        $pdf = PDF::loadView('pdf.sparepartTopSell', compact('report','year','date','no'))->setPaper('a4', 'portrait');

        return $pdf->stream();
    }

}
