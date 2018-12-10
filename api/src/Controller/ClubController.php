<?php
// api/src/Controller/ClubController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use App\Entity\Club;

/**
 * Class ClubController
 */
class ClubController extends Controller
{
  /**
   * @Route(name="get_clubs",path="/clubs", methods="GET")
   *
   * @return Response
   */
  public function getClubsAction()
  {
      $doctrine = $this->getDoctrine();
      $clubRepository = $doctrine->getRepository(Club::class);
      $clubs = $clubRepository->findAll();

      return new Response(json_encode($clubs));
  }
}